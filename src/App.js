import { FiHome, FiAlertOctagon } from "react-icons/fi";
import { FaPizzaSlice } from "react-icons/fa";
import "./App.css";
import { MenuCardsList } from "./components/menu-page-navbar/menu-cards-list";
import { MenuCategory } from "./components/menu-page-navbar/menu-category";
import { MenuOptions } from "./components/menu-page-navbar/menu-options";
import { MenuNav } from "./components/menu-page-navbar/menu-page-navbar";

function App() {
  return (
    <div className="w-screen h-screen flex ">
      <div className=" bg-[#1a0e2e] h-screen relative z-2 flex-col justify-between items-center lg:flex hidden w-[8vw]">
        <div className="flex flex-col w-1/2 h-full justify-evenly items-center text-white">
          <FiHome  className="text-2xl"/>
          <FaPizzaSlice className="mt-7"/>
          <FiAlertOctagon />
          <FiAlertOctagon />
          <FiAlertOctagon />
        </div>
        <div className="flex flex-col w-1/2 h-full justify-between items-center">
          <FiAlertOctagon />
        </div>
      </div>
      <div className="flex flex-col lg:w-[95vw] w-screen h-auto overflow-y-scroll ">
        <MenuNav />
        <MenuOptions />
        <MenuCategory />
        <MenuCardsList/>

      </div>
    </div>
  );
}

export default App;
