import { useParams } from "react-router-dom";
import CommonProductBanner from "../../Shared/CommonProductBanner/CommonProductBanner";
import { BsCart3 } from "react-icons/bs";
import useAllProduct from "../../Hooks/useAllProduct";
import Swal from "sweetalert2";

const MoreDetails = () => {
  // const [addCard,setAddCard]=useState([])
  const { products } = useAllProduct();
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(id);
  const product = products?.find((item) => item.product_id === idInt);
  console.log(product);

// add card 
  const addToCart = (product) => {
    const newCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...newCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    Swal.fire({
      title: 'Success',
      text: 'Product item Added successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  };

// add wishlist 
const addToWishlist=(product)=>{
  const newCart = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedCart = [...newCart, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedCart));
    Swal.fire({
      title: 'Success',
      text: 'Product item wishlist a Added successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
}

  return (
    <div className="mb-20">
      <CommonProductBanner
        headerTitle={"Product Details"}
        subHeader={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />

      <div className="relative top-10">
        <div className="flex justify-center relative -mt-[180px] md:h-[563px] md:w-[1062px] mx-auto bg-white shadow-2xl p-8 gap-x-8 rounded-2xl">
          <div>
            <img
              className="w-[424px] h-[503px] rounded-2xl"
              src={product?.product_image}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product?.product_title}</h1>
            <p className="text-xl font-medium my-[12px]">
              price : $ {product?.price}
            </p>
            <button className="btn mt-[16px]">in stock</button>
            <p className="my-[16px]">{product?.description}</p>
            <h1 className="font-bold mt-[16px]">
              Specification :
              {product?.Specification?.map((item, idx) => (
                <li className="list-decimal font-semibold" key={idx}>
                  {item}
                </li>
              ))}
            </h1>

            <h1 className="font-bold my-[16px]">Rating</h1>
            <div className="flex items-center gap-6">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <button className="px-5 py-2 bg-slate-400  rounded-full">
                4.8
              </button>
            </div>
            <div className="flex items-center gap-5">
              <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-x-2 py-[16px] px-[30px] mt-[15px] bg-[#9538E2] rounded-full text-white font-bold">
                Add To Card <BsCart3 />{" "}
              </button>
              <button 
              onClick={() => addToWishlist(product)}
              >
                <img
                  src="https://i.ibb.co.com/59pFN3P/Frame-2087325560.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
