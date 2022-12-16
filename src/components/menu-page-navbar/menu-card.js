import { FiShoppingCart } from "react-icons/fi";

export const MenuCard = ({ name, price, category, rating, source }) => {
  return (
    <div className="w-full h-auto border-2 px-6 py-4 snap-center snap-always flex flex-col items-start justify-between rounded-3xl bg-[#152239] transition ease-linear duration-300 only:">
      <div className="w-full h-44 mb-2">
        <img className="w-full h-full rounded-3xl object-cover" src={source} />
      </div>
      <div className="flex justify-between items-end w-full h-12  ">
        <div className="flex flex-col justify-between items-start">
          <p className="text-2xl text-white">${price}</p>
          <p className="text-sm text-gray-300 ">
            {price * (Math.random() * 3).toFixed()} min
          </p>
        </div>
        <div className="flex bg-slate-50 justify-between rounded-3xl h-12 items-center  sm:w-[auto] w-[45%] p-2 mx-auto ">
          <div className=" flex justify-center items-center h-[32px] w-[32px]  hover:scale-105 hover:bg-black bg-[#ff9f00] px-3 py-1 text-white rounded-[50%]">
            -
          </div>
          <span className="bg-slate-100 mx-3">{price}</span>
          <div className="  flex justify-center items-center  hover:scale-105 hover:bg-black  bg-[#ff9f00] px-3 py-1 text-white rounded-[50%] h-[32px] w-[32px]">
            +
          </div>
        </div>

        <div className="flex justify-center items-center rounded-[50%] bg-[#ff9f00] hover:bg-black  hover:scale-105 duration-200 ease-linear w-12 h-12 ">
          <button className="font-bold text-white  ">
            <FiShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
