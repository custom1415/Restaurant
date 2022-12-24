import { useDispatch } from "react-redux";

import Burger from "../components/assets/burger.png";
import PizzaTwo from "../components/assets/pizza2.png";
import Pizza from "../components/assets/pizzarem.png";
import Fries from "../components/assets/friesrem.png";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const [Hidden, setHidden] = useState(true);
  return (
    <>
      {!Hidden && (
        <div className="w-screen h-screen fixed bg-white z-40 top-0 left-0 lg:hidden flex justify-center items-start pt-24">
          <div className="flex flex-col w-[80%] justify-center items-center">
            <Link
              onClick={() => setHidden(true)}
              className="text-3xl my-3 text-[#ff9f00]"
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setHidden(true)}
              className="text-3xl my-3 text-[#ff9f00]"
              to="menu"
            >
              Menu
            </Link>
            <Link
              onClick={() => setHidden(true)}
              className="text-3xl my-3 text-[#ff9f00]"
              to="reservation"
            >
              Reservation
            </Link>
            <Link
              onClick={() => setHidden(true)}
              className="text-3xl my-3 text-[#ff9f00]"
              to="contact"
            >
              Contact
            </Link>
            <Link
              onClick={() => setHidden(true)}
              className="text-3xl my-3 text-[#ff9f00]"
              to="about"
            >
              About us
            </Link>
            <Link
              onClick={() => setHidden(true)}
              className="text-3xl my-3 text-[#ff9f00]"
              to="instagram"
            >
              Instagram
            </Link>
          </div>
        </div>
      )}
      <div className="lg:w-[92vw] h-auto  py-9 lg:px-8 px-12">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl">Bla Bla</h1>
          <FaHamburger
            onClick={() => setHidden(!Hidden)}
            className="lg:hidden  text-2xl cursor-pointer text-[#ff4444] relative z-50"
          />
        </div>
        <div className="flex justify-between items-center h-auto">
          <div className="md:w-1/2 flex flex-col justify-center items-start h-full mt-4 ">
            <h1 className="  text-[#ff9f00] sm:text-6xl text-4xl sm:scale-[1] scale-[1.1] origin-left font-bold font-['Playfair_Display'] mt-12">
              <span className="text-[#ff4444] font-['Playfair_Display'] ">
                Come&nbsp;
              </span>
              Hungry
              <br /> Leave&nbsp;
              <span className=" Playfair  text-[#ff4444]">Happy</span>
            </h1>
            <p className="my-6 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              praesentium doloremque accusamus dolorum at iure ut unde
              consequatur odio iste, rerum perspiciatis, nobis laborum. Fuga
              quod aspernatur repellat maiores ex!
            </p>
            <button className="bg-[#ff9f00] px-4 py-2  text-white rounded-xl">
              <Link to="menu">Order Online</Link>
            </button>
            <div>
              <div className="w-full flex justify-between  mt-4">
                <div className="  bg-gray-100 mr-3  grid place-items-center  backdrop-blur-xl ">
                  <img className="w-full object-cover" src={Pizza} />
                </div>
                <div className="  bg-gray-100 mr-3 grid place-items-center ">
                  <img className="w-full object-cover" src={Fries} />
                </div>
                <div className="  bg-gray-100 mr-3  grid place-items-center  ">
                  <img
                    className="w-full object-cover scale-75"
                    src={PizzaTwo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:block hidden lg:w-1/2 w-1/2 h-1/2 ">
            <img src={Burger} />
          </div>
        </div>
      </div>
    </>
  );
};
