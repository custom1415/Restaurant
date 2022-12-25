import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { selectCartCount } from "../../redux/cart/cart.selectors";
import { AiOutlineHeart } from "react-icons/ai";
import { selectCartCount } from "../../redux/cart/cart.toolkit";
import {
  selectSidebarState,
  toggleSidebar,
} from "../../redux/sidebar/sidebar.toolkit";
import { selectFavourites } from "../../redux/menu-items/menu-items.reducer";
export const MenuNav = () => {
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleSidebarState = () => dispatch(toggleSidebar());
  const favourites = useSelector(selectFavourites);
  console.log(cartCount);

  return (
    <div className="w-full min-h-20 flex justify-between items-center p-4 relative ">
      <h3 className="text-3xl supersm:block hidden ">Menu</h3>
      <div className="flex items-center justify-between supersm:w-auto w-full">
        <input
          className=" bg-slate-100 placeholder-gray-500 placeholder-opacity-100 outline-none py-2 px-3 focus:ring-0 rounded-3xl md:w-80 sm:w-72 w-52 "
          placeholder="Search"
        />
        {/* <IoMdNotificationsOutline className="ml-4 hover:text-gray-400" /> */}
        <div className="relative">
          <AiOutlineHeart className=" text-2xl" />
          <div className="w-5 h-5 absolute top-[-10px] right-[-10px] rounded-[50%] bg-red-500 grid place-items-center text-white text-[10px]">
            {favourites.length}
          </div>
        </div>

        {/* <RiSettingsLine className="ml-4 hover:text-gray-400" /> */}
        <div className="sm:flex hidden items-center ml-4 sm:flex-row text-2xl ">
          <AiOutlineUser className="ml-2 hover:text-gray-400" />
          {/* <p className="ml-2 hover:text-gray-400">Saroj</p>
          <BsChevronDown className="ml-2 hover:text-gray-400 " /> */}
        </div>
        <div className="w-8 h-8 p-2 grid place-items-center bg-[#ff9000] relative ml-4  rounded-[50%]">
          <FiShoppingCart
            className=" text-white hover:text-gray-400"
            onClick={toggleSidebarState}
          />
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
