import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Wishlist = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("wishlist")) || [];
        setCartItems(storedCart);
      }, []);
    
      // deleted card
      const handleDelete = (id) => {
        const newCard = cartItems.filter((p) => p.product_id != id);
        setCartItems(newCard);
        console.log(id);
        localStorage.removeItem("wishlist", JSON.stringify(newCard));
        Swal.fire({
          title: "Success",
          text: "Product item Deleted successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      };

    return (
        <div className="mt-20 mb-10 max-w-7xl mx-auto">
             <div className="mt-20 mb-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Wishlist</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col gap-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.product_id}
                className="card card-side bg-base-100 shadow-xl p-5 border"
              >
                <figure className="border p-5 rounded-2xl">
                  <img
                    className="rounded-2xl w-[200px] h-[140px]"
                    src={item?.product_image}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item?.product_title}</h2>
                  <p className="">{item?.description}</p>
                  <h2 className="text-xl font-bold ">{item?.price}</h2>
                </div>
                <div className="card-actions justify-end mr-10">
                  <button
                    onClick={() => handleDelete(item?.product_id)}
                    className=""
                  >
                    <img
                      src="https://i.ibb.co.com/TMz84QH/Group-2.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div
              className="flex items-center justify-center
            "
            >
              <img
                className="w-[600px]"
                src="https://i.ibb.co/3FVgSYq/3009287.jpg"
              ></img>
            </div>
          )}
        </div>
      </div>
        </div>
    );
};

export default Wishlist;