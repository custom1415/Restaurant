import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import {
  selectFavourites,
  setFavourites,
  setHidden,
} from "../../redux/menu-items/menu-items.reducer";
import { useDispatch, useSelector } from "react-redux";
export const MenuModal = ({
  source,
  name,
  category,
  price,
  rating,
  id,
  quantity,
  setModifiedQuantity,
}) => {
  const item = { source, name, category, price, rating, quantity, id };
  console.log(quantity);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(setHidden(true));
  const favourite = useSelector(selectFavourites);
  console.log(favourite);
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    favourite.forEach((item) => {
      if (item.id === id) {
        setIsFavourite(item.isFavourite);
      }
    });
  }, []);

  console.log(price);
  return (
    <div className="w-screen h-screen grid place-items-center fixed top-0 left-0 z-20">
      <div className="overlay"></div>
      <div className=" sm:w-[100%]  md:w-[60%] w-[95%] sm:scale-80  md:scale-100    md:min-w-[760px]  h-auto bg-[#f4f9fb] flex flex-col md:p-11 py-11 md:px-11 px-5 justify-between items-center md:rounded-3xl relative z-50 ">
        <div className="flex md:flex-col flex-row-reverse absolute md:top-6 top-2 right-5 ">
          <div
            className="bg-[#ff9f00] text-white md:p-1 p-[2px]"
            onClick={closeModal}
          >
            <MdOutlineClose className="text-2xl " />
          </div>
          <div
            className="bg-[#ff9f00] text-white md:p-1 p-[2px] md:translate-y-2 md:translate-x-0  translate-x-[-10px]"
            onClick={() => {
              setIsFavourite(!isFavourite);
              dispatch(setFavourites({ isFavourite, item }));
            }}
          >
            {isFavourite ? (
              <AiFillHeart className="text-2xl " />
            ) : (
              <AiOutlineHeart className="text-2xl " />
            )}
          </div>
        </div>
        <div className="product-details-top flex  sm:items-start items-center sm:justify-between justify-center w-full h-full sm:gap-6 gap-3 mb-5">
          <div className="rounded-3xl md:w-[40%] w-full  ">
            <img
              className="mb-2 rounded-3xl object-cover md:w-[260px] w-full  md:h-[247px] sm:h-[180px] h-[140px]"
              src={source}
            />
          </div>
          <div className="md:w-[60%] w-full ">
            <h1 className="text-[#ff9f00] sm:text-5xl text-4xl  text-center sm:mb-4 mb-2">
              {name || "hi"}
            </h1>
            <p className=" lg:text-xl sm:text-lg text-md lg:text-left text-center ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro et
              quibusdam laudantium praesentium incidunt at nostrum delectus
              voluptates odit odio.
            </p>
          </div>
        </div>
        <div className="product-details-center grid  grid-cols-3  md:text-xl sm:text-lg text-[1.2rem] w-full items-center justify-items-start">
          <div className="flex justify-start items-center">
            <p>Category</p>
            <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
            <div className="bg-[#ff9f00] px-4 py-1 rounded-3xl">
              <p className="text-white  ">{category}</p>
            </div>
          </div>
          <div className="flex justify-start items-center lg:my-0 my-2">
            <p>Rating</p>
            <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>

            <p className="text-[#ff9f00] whitespace-nowrap">
              {rating || " ★★★★★"}
            </p>
          </div>
          <div className="whitespace-nowrap">
            <span>Cooking Time</span>
            <span>&nbsp;&nbsp;:&nbsp;&nbsp;</span>
            <span className="text-[#ff9f00]">
              {(price * Math.PI).toFixed()}min
            </span>
          </div>
        </div>
        <div className="product-details-bottom grid grid-cols-3  lg:text-2xl text-xl w-full items-center my-6">
          <div>
            <h1 className="md:text-5xl text-4xl text-[#ff9f00]">{price}$</h1>
          </div>
          <div className="md:col-span-1 col-span-2 flex items-center lg:justify-center md:justify-start justify-center ">
            <div className="sm:w-[40px] w-[28px] sm:h-[40px] h-[28px]  bg-[#ff9f00] rounded-[50%] text-white grid place-items-center">
              l
            </div>
            <div className="sm:w-[40px] w-[28px] sm:h-[40px] h-[28px] sm:mx-3 mx-2 bg-[#ff9f00] rounded-[50%] text-white grid place-items-center">
              l
            </div>
            <div className="sm:w-[40px] w-[28px] sm:h-[40px] h-[28px]  bg-[#ff9f00] rounded-[50%] text-white grid place-items-center">
              l
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 flex bg-gray-200 justify-between rounded-3xl sm:h-12 h-10  items-center   w-full p-2 mx-auto ">
            <motion.div
              whileTap={{ scale: 1.5 }}
              className="box-shadow flex justify-center items-center h-[30px] ] w-[30px]   hover:scale-105  bg-[#ff9f00] px-3 py-1 text-white rounded-[50%]"
            >
              -
            </motion.div>
            <span className=" mx-3">{quantity}</span>
            <motion.div
              whileTap={{ scale: 1.5 }}
              className=" box-shadow flex justify-center items-center  hover:scale-105  bg-[#ff9f00] px-3 py-1 text-white rounded-[50%]   h-[30px]  w-[30px]"
            >
              +
            </motion.div>
          </div>
        </div>
        <div className=" flex bg-[#ff9f00] px-3 justify-center items-center rounded-[37px] w-full sm:py-3 py-1 text-white sm:text-2xl text-xl">
          Add to Cart
          <FaShoppingCart className="ml-4" />
        </div>
      </div>
    </div>
  );
};
