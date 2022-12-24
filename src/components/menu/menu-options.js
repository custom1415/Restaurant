import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  showDiscountedItems,
  Sort,
} from "../../redux/menu-items/menu-items.reducer";

export const MenuOptions = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-28 flex justify-between items-center  p-4 ">
      <h3 className="sm:text-2xl text-xl md:text-3xl text-[#ff4444]   ">
        Find the best food &nbsp;🍳
      </h3>
      <div className="flex items-center">
        <div className="relative">
          <select
            className="flex  text-sm sm:w-48 supersm:w-36 w-32 supersm:px-4 px-3 py-2 m-2 appearance-none pr-8 bg-gray-300"
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
        {/* <div className=" relative">
          <select className="flex text-sm px-4 py-2 ml-3 appearance-none pr-8 bg-gray-300">
            <option className=" ">Recently added</option>
          </select>
          <BsChevronDown className=" absolute top-[50%] translate-y-[-50%] right-2" />
        </div> */}
      </div>
    </div>
  );
};
