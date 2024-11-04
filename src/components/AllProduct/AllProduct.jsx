import { useParams } from "react-router-dom";
import ProductAllCard from "../ProductAllCard/ProductAllCard";
import useProductBtn from "../../Hooks/useProductBtn";
import useAllProduct from "../../Hooks/useAllProduct";
import { useState } from "react";

const AllProduct = () => {
  const {productBtns}=useProductBtn([]);
  const { products } = useAllProduct();
  const {category}=useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "All");

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products?.filter((product) => product.category === selectedCategory);


  return (
    <div>
      <div className="mb-10">
        <h2 className="text-[40px] font-bold text-center mt-[150px] ">
          Explore Cutting-Edge Gadgets
        </h2>
      </div>
      <div className="flex gap-6">
        <div className="w-full lg:w-[20%] ">
        <div className=" flex justify-center bg-[#FFFF] drop-shadow-xl py-4">
           <div className="grid grid-cols-1 gap-3">
           <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className={`w-[192px] py-3 font-semibold rounded-full ${
                  selectedCategory === "All"
                    ? "bg-[#9538E2] text-white"
                    : "bg-[#09080F0D]"
                }`}
              >
                All Product
              </button>
           {
            productBtns?.map((item,idx)=>
              <button
            key={idx}
            type="button"
            onClick={() => setSelectedCategory(item.category)}
            className={`w-[192px] py-3 font-semibold rounded-full ${
              selectedCategory === item.category
                ? "bg-[#9538E2] text-white"
                : "bg-[#09080F0D]"
            }`}
          >
            {item.category}
          </button>
            )
           }
           </div>
        </div>
        </div>
        <div className="w-full lg:w-[80%] ">
          <ProductAllCard products={filteredProducts}  />
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
