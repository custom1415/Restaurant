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
import { useNavigate } from "react-router-dom";
export const MenuNavBottom = () => {
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleSidebarState = () => dispatch(toggleSidebar());
  const favourites = useSelector(selectFavourites);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/favourites");
  };

  return (
    <div className="min-h-20 flex justify-center items-center p-4 fixed bottom-0 bg-white lg:hidden w-full shadow-black shadow-md z-50">
      <div className="flex items-center justify-between px-3 w-full ">
        {/* <IoMdNotificationsOutline className="ml-4 hover:text-gray-400" /> */}
        <div className="relative" onClick={handleClick}>
          <AiOutlineHeart className=" text-2xl" />
          <div className="w-5 h-5 absolute top-[-10px] right-[-10px] rounded-[50%] bg-red-500 grid place-items-center text-white text-[10px]">
            {favourites.length}
          </div>
        </div>

        {/* <RiSettingsLine className="ml-4 hover:text-gray-400" /> */}
        <div className="text-2xl ">
          <AiOutlineUser className="ml-2 hover:text-gray-400" />
          {/* <p className="ml-2 hover:text-gray-400">Saroj</p>
          <BsChevronDown className="ml-2 hover:text-gray-400 " /> */}
        </div>
        <div
          className="w-8 h-8 p-2 grid place-items-center bg-[#ff9000] relative   rounded-[50%] transition ml-4 hover:scale-125"
          onClick={toggleSidebarState}
        >
          <FiShoppingCart className=" text-white cursor-pointer " />
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
