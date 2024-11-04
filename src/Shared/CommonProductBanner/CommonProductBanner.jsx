import { useLocation } from "react-router-dom";

const CommonProductBanner = ({ headerTitle, subHeader, btn_one, btn_two }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="pt-[75px]">
      <div className="bg-[#9538E2] flex items-center justify-center">
        <div className="text-center text-white py-6">
          <h2 className="text-[32px] font-bold mb-3">{headerTitle}</h2>
          <p className="max-w-md mx-auto">{subHeader}</p>
          <div className={`flex items-center justify-center gap-5 mb-20 mt-10 ${pathname==='/statistics' && 'hidden'}`}>
          <button
         
            type="button"
            className="px-8 py-3  border rounded-full  text-[#9538E2] bg-white w-[150px] font-bold"
          >
            {btn_one}
          </button>
          <button
          
            type="button"
            className="px-8 py-3 font-semibold border rounded-full text-white w-[150px]"
          >
            {btn_two}
          </button>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default CommonProductBanner;
