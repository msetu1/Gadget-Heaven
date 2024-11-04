import { Link } from "react-router-dom";

const ProductAllCard = ({ products }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products && products.length > 0 ? (
          products.map((product,idx) => (
            <div key={idx} className="card card-compact bg-base-100  shadow-xl">
      <figure className="p-5 ">
        <img
          className="rounded-xl h-[181px] w-full"
          src={product?.product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{product?.product_title}</h2>
        <p className="text-xl font-medium text-[#09080F99]">Price: {product?.price}k</p>
        <div className="card-actions justify-start">
          <Link to={`/more-details/${product?.product_id}`}>
            <button className="focus:bg-purple-600 focus:text-white font-semibold  rounded-full px-[24px] py-[13px] border-2 border-purple-700">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>

    

    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    //   {products && products.length > 0 ? (
    //     products.map((product) => (
    //       <div key={product.id} className="border p-4 rounded-lg shadow-md">
    //         <h3 className="text-xl font-semibold">{product.name}</h3>
    //         <p>Brand: {product.brand}</p>
    //         <p>Price: ${product.price}</p>
    //         <p>Category: {product.category}</p>
    //       </div>
    //     ))
    //   ) : (
    //     <p className="text-center text-gray-500">No products found.</p>
    //   )}
    // </div>
  );
};

export default ProductAllCard;
