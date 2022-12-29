import { motion } from "framer-motion";
// import { ReactComponent as I } from "../assets/undrawEating.svg";
import I from "../assets/qn2.svg";
export const Contact = () => {
  return (
    <div className="lg:w-[92%] w-full h-screen grid grid-cols-2 place-content-center place-items-center">
      <div className="relative grid justify-items-start place-items-center h-full w-full ">
        <img src={I} className="w-full h-full" />
        {/* <I className="w-full h-[60%]" /> */}
      </div>
      <div className="flex flex-col h-full sm:w-[90%] w-[90%] justify-center p-8 mx-auto">
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
    </div>
  );
};
