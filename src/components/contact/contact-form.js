import { motion } from "framer-motion";
import I from "../assets/bg.jpg";
export const Contact = () => {
  return (
    <div className="lg:w-[92vw] w-full h-screen grid grid-cols-1 place-content-center place-items-center">
      <div className="flex flex-col h-full sm:w-[70%] w-[90%] justify-center p-8 mx-">
        <h1 className="sm:text-6xl text-5xl font-bold text-[#ff9f00] mb-4 whitespace-nowrap">
          Questions or <br /> Comments ?
        </h1>
        <form className="flex flex-col  w-[100%] ">
          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="First name"
              className=" px-2 border-2 border-[#ff9f00]  my-3 h-12"
            />
            <input
              placeholder="lastname"
              className=" px-2 border-2 border-[#ff9f00]  my-3 h-12 "
            />
          </div>

          <input
            placeholder="email"
            className=" px-2 border-2 border-[#ff9f00]  my-3 h-12 w-full"
          />
          <textarea
            placeholder="message"
            className=" px-2 resize-none border-2 border-[#ff9f00]  w-full"
            rows="12"
          />
          <motion.button
            whileTap={{ scale: 2 }}
            className=" bg-[#ff9f00] px-4 py-2  self-end mt-3 text-white rounded-xl whitespace-nowrap"
          >
            Send
          </motion.button>
        </form>
      </div>
      {/* <div className="relative grid justify-items-start items-center h-full ">
        <img src={I} className="w-[70%] h-[60%]" />
      </div> */}
    </div>
  );
};
