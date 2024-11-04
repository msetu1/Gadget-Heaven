import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Card = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  // sorted data
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);
  const handleSort = () => {
    const sortedItems = [...cartItems].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    setCartItems(sortedItems);
    setIsAscending(!isAscending);
  };

  // Calculate total cost
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // deleted card
  const handleDelete = (id) => {
    const newCard = cartItems.filter((p) => p.product_id != id);
    setCartItems(newCard);
    console.log(id);
    localStorage.removeItem("cart", JSON.stringify(newCard));
    Swal.fire({
      title: "Success",
      text: "Product item Deleted successfully",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div>
      <div className="mt-20 mb-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Cart</h2>
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">
                Total Cost : $ {totalCost.toFixed(2)}
              </h2>
            </div>
            <button
              onClick={handleSort}
              className="py-[13px] px-[30px] border-2 border-purple-700 rounded-full focus:text-white  focus:bg-purple-800"
            >
              Sort By Price
            </button>
            <button
            onClick={()=>document.getElementById('my_modal_5').showModal()}
            className=" py-[13px] px-[30px] border-2 border-purple-700 rounded-full  focus:bg-purple-800 focus:text-white">
              Purchase
            </button>
          </div>
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

{/* modal section  */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box text-center">
   <div className="flex items-center justify-center mb-5">
   <img src="https://i.ibb.co.com/tc76WCN/x32-0-Success.png" alt="" />
   </div>
    <h3 className="font-bold text-2xl">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing</p>
    <p className="pb-4">Total : {totalCost.toFixed(2)}</p>
    <div className="modal-action flex items-center justify-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  );
};

export default Card;
