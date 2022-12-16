import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export const MenuOptions = () => {
  return (
    <div className="w-full h-28 flex justify-between items-center  p-4 ">
      <h3 className="sm:text-2xl text-xl md:text-3xl ">
        Find the best food &nbsp;🍳
      </h3>
      <div className="flex items-center w-50">
        <div className="relative">
          <select className="flex  text-sm px-4 py-2 m-3 appearance-none pr-8 bg-gray-300">
            <option className="bg-gray-400">Recently added</option>
          </select>
          <BsChevronDown className=" absolute top-[50%] translate-y-[-50%] right-5" />
        </div>
        <div className=" relative">
          <select className="flex text-sm px-4 py-2 m-3 appearance-none pr-8 bg-gray-300">
            <option className=" ">Recently added</option>
          </select>
          <BsChevronDown className=" absolute top-[50%] translate-y-[-50%] right-5" />
        </div>
      </div>
    </div>
  );
};
