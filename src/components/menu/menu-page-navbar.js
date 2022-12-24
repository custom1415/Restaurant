import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
// import { selectCartCount } from "../../redux/cart/cart.selectors";
import { AiOutlineHeart } from "react-icons/ai";
import { selectCartCount } from "../../redux/cart/cart.toolkit";

export const MenuNav = () => {
  const cartCount = useSelector(selectCartCount);
  console.log(cartCount);
  return (
    <div className="w-full min-h-20 flex justify-between items-center p-4 relative ">
      <h3 className="text-3xl">Menu</h3>
      <div className="flex items-center w-50">
        <input
          className=" bg-slate-100 placeholder-gray-500 placeholder-opacity-100 outline-none py-2 px-3 focus:ring-0 rounded-3xl "
          placeholder="Search"
        />
        <IoMdNotificationsOutline className="ml-4 hover:text-gray-400" />

        <AiOutlineHeart />

        {/* <RiSettingsLine className="ml-4 hover:text-gray-400" /> */}
        <div className="flex items-center ml-4 sm:flex-row flex-col">
          <AiOutlineUser className="ml-2 hover:text-gray-400" />
          <p className="ml-2 hover:text-gray-400">Saroj</p>
          <BsChevronDown className="ml-2 hover:text-gray-400 " />
        </div>
        <div className="w-8 h-8 p-2 grid place-items-center bg-[#ff9000] relative ml-4 ] rounded-[50%]">
          <FiShoppingCart className=" text-white hover:text-gray-400" />
          {cartCount > 0 && (
            <div className="w-5 h-5 absolute top-[-8px] right-[-8px] rounded-[50%] bg-red-500 grid place-items-center text-white text-[10px]">
              {cartCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
