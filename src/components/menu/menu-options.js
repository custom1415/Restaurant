import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  showDiscountedItems,
  Sort,
} from "../../redux/menu-items/menu-items.reducer.re";

export const MenuOptions = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-28 flex sm:justify-between justify-center items-center  p-4 ">
      <h3 className="sm:text-2xl text-xl md:text-3xl text-[#ff4444] sm:block hidden  ">
        Find the best food &nbsp;🍳
      </h3>
      <div className="flex items-center w-50">
        <div className="relative">
          <select
            className="flex  text-sm px-4 py-2 m-3 appearance-none pr-8 bg-gray-300"
            onChange={(e) => {
              if (e.target.value === "discount") {
                dispatch(showDiscountedItems());
                return;
              }
              dispatch(Sort(e.target.value));
            }}
          >
            <option className="bg-gray-400">Sort By Price</option>

            <option value="low-to-high" className="bg-gray-400  ">
              Low to High
            </option>

            <option value="high-to-low" className="bg-gray-400  ">
              High to low
            </option>
            <option value="discount" className="bg-gray-400  ">
              Discount available
            </option>
          </select>
          <BsChevronDown className=" absolute top-[50%] translate-y-[-50%] right-5" />
        </div>
        <div className=" relative">
          <select className="flex text-sm px-4 py-2 ml-3 appearance-none pr-8 bg-gray-300">
            <option className=" ">Recently added</option>
          </select>
          <BsChevronDown className=" absolute top-[50%] translate-y-[-50%] right-2" />
        </div>
      </div>
    </div>
  );
};
