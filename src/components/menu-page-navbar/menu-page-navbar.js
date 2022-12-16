import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export const MenuNav = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center bg-slate-100 p-4 border border-b-gray-200">
      <h3 className="text-3xl">Menu</h3>
      <div className="flex items-center w-50">
        <input
          className="placeholder-gray-500 placeholder-opacity-100 outline-none p-2 focus:ring-0 "
          placeholder="Search"
        />
        <IoMdNotificationsOutline className="ml-4 hover:text-gray-400" />
        {/* <RiSettingsLine className="ml-4 hover:text-gray-400" /> */}
        <div className="flex items-center ml-4 sm:flex-row flex-col">
          <AiOutlineUser className="ml-2 hover:text-gray-400" />
          <p className="ml-2 hover:text-gray-400">Saroj</p>
          <BsChevronDown className="ml-2 hover:text-gray-400 " />
        </div>
        <FiShoppingCart className="ml-4 hover:text-gray-400" />
      </div>
    </div>
  );
};
