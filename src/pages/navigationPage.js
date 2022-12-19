import { Link, Outlet } from "react-router-dom";

export const NavigationPage = () => {
  console.log("gihhi");
  return (
    <div className="w-screen h-screen flex ">
      <div className="h-screen relative z-2 before:content-[''] before:border-[1px] before:border-[#ff4444] before:h-[90%] before:absolute before:top-[50%] before:right-0 before:translate-y-[-50%] flex-col justify-evenly items-center lg:flex hidden w-[8vw] min-w-8vw]   z-20 bg-white">
        <div>
          <Link
            to="/"
            className=" text-black  transform -rotate-90 text-center cursor-pointer origin-center"
          >
            Home
          </Link>
        </div>
        <div className="flex flex-col justify-evenly w-full h-[75%]">
          <Link
            to="menu"
            className=" text-black rounded-3xl border-2 py-2 border-orange-400 transform -rotate-90  text-center cursor-pointer origin-center "
          >
            Menu
          </Link>
          <Link
            to="reservation"
            className="  text-black  transform -rotate-90  text-center cursor-pointer origin-center"
          >
            Reservation
          </Link>
          <Link
            to="contact"
            className="rotate-270  text-black  transform -rotate-90   text-center cursor-pointer origin-center"
          >
         Contacts
          </Link>
          <Link
            to="contact"
            className="rotate-270  text-black  transform -rotate-90   text-center cursor-pointer origin-center"
          >
            About Us
          </Link>
        </div>
        <div>
          <Link className="rotate-270  text-black  transform -rotate-90 text-center cursor-pointer origin-center">
            Instagram
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
