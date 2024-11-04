import { useState } from "react";
import Card from "../../components/Card/Card";
import Wishlist from "../../components/Purchase/Wishlist";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("card");

  return (
    <div className="min-h-screen pt-[75px]">
 <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>

      {/* dashboard banner  */}
      <div className="bg-[#9538E2] flex items-center justify-center">
        <div className="text-center text-white py-6">
          <h2 className="text-[32px] font-bold mb-3">Dashboard</h2>
          <p className="max-w-md mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <div className=" px-4 py-2 w-fit mx-auto flex justify-between gap-5 rounded-full mt-6 mb-10">
        <button
          className="px-8 py-3  border rounded-full   font-bold focus:bg-white focus:text-black"
          onClick={() => setActiveTab("card")}
        >
          Card
        </button>
        <button
          className='px-8 py-3 font-semibold border rounded-full text-white w-[150px] focus:bg-white focus:text-black'
          onClick={() => setActiveTab("Wishlist")}
        >
          Wishlist
        </button>
      </div>
        </div>
      </div>

      

      <div className="mt-8">
        {activeTab === "card" ? <Card /> : <Wishlist/>}
      </div>
    </div>
  );
};

export default Dashboard;
