import { motion } from "framer-motion";
import { useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { setHidden } from "../../redux/menu-items/menu-items.reducer";
import { useDispatch } from "react-redux";
export const MenuModal = ({ source, name, category, price, rating }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(setHidden(true));
  console.log(price);
  return (
    <div className="w-screen h-screen grid place-items-center bg-white fixed top-0 left-0 z-20">
      <div className="md:w-[60%] w-[90%] md:scale-100 scale-80  md:min-w-[750px]  lg:min-w-[832px]  h-auto bg-[#f4f9fb] flex flex-col p-11 justify-between items-center rounded-3xl relative z-50">
        <div className="flex flex-col absolute top-6 right-12">
          <div className="bg-[#ff9f00] text-white p-1" onClick={closeModal}>
            <MdOutlineClose className="text-2xl" />
          </div>
          <div className="bg-[#ff9f00] text-white p-1 translate-y-2">
            <AiOutlineHeart className="text-2xl " />
          </div>
        </div>
        <div className="flex items-start justify-between w-full gap-6 mb-5">
          <div className="rounded-3xl w-[40%] ">
            <img
              className="mb-2 rounded-3xl object-cover md:w-[260px] w-[180px] md:h-[247px] h-[180px]"
              src={source}
            />
          </div>
          <div className="w-[60%] ">
            <h1 className="text-[#ff9f00] text-5xl text-center mb-4">
              {name || "hi"}
            </h1>
            <p className="lg:text-xl text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et
              quibusdam laudantium praesentium incidunt at nostrum delectus
              voluptates odit odio.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-3 lg:text-2xl text-xl w-full place-items-center">
          <div className="flex flex-col w-full mb-3">
            <div className="flex justify-start items-center mb-3">
              <p>Category</p>
              <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
              <div className="bg-[#ff9f00] px-3 py-1 rounded-3xl">
                <p className="text-white">{category}</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <p>Rating</p>
              <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>

              <p className="text-[#ff9f00]">{rating}</p>
            </div>
          </div>
          {/* <div className="flex  justify-between items-center w-[70%]"> */}
          <form className="flex justify-center items-center" ref={ref}>
            <div className="lg:w-14 w-10 lg:h-14 h-10 rounded-[50%] grid place-items-center bg-[#ff9f00] text-white">
              <input
                className="cursor-pointer"
                type="radio"
                value="l"
                name="size"
              />{" "}
              l
            </div>
            <div className="lg:w-14 w-10 lg:h-14 h-10 mx-3 rounded-[50%] grid place-items-center bg-gray-300 text-white">
              <input
                className="cursor-pointer"
                type="radio"
                value="m"
                name="size"
              />{" "}
              m
            </div>
            <div className="lg:w-14 w-10 lg:h-14 h-10 rounded-[50%] grid place-items-center bg-gray-300 text-white">
              <input
                className="cursor-pointer"
                type="radio"
                value="s"
                name="size"
              />{" "}
              s
            </div>
          </form>

          <div className="flex bg-gray-200 justify-between rounded-3xl h-12 items-center w-full   p-2  ">
            <motion.div
              whileTap={{ scale: 2.5 }}
              className="cursor-pointer box-shadow flex justify-center items-center h-[32px] w-[32px]  hover:scale-105  bg-[#ff9f00] px-3 py-1 text-white rounded-[50%]"
            >
              -
            </motion.div>
            <span className=" mx-3">{price}</span>
            <motion.div
              whileTap={{ scale: 2.5 }}
              className="cursor-pointer box-shadow flex justify-center items-center  hover:scale-105  bg-[#ff9f00] px-3 py-1 text-white rounded-[50%] h-[32px] w-[32px]"
            >
              +
            </motion.div>
            {/* </div> */}
          </div>
        </div>
        <div className="flex justify-between items-center w-full lg:text-2xl text-xl">
          <div className="whitespace-nowrap">
            <span>Cooking Time</span>
            <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
            <span className="text-[#ff9f00]">
              {(price * Math.PI).toFixed()}min
            </span>
          </div>
          <div className=" mx-6">
            <span>Price</span>
            <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
            <span className="text-[#ff9f00]">{price}</span>
          </div>
          <div className=" flex bg-[#ff9f00] px-3 justify-center items-center rounded-[37px] lg:w-80 w-72 py-3 text-white">
            Add to Cart
            <FaShoppingCart className="ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
