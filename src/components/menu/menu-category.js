import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterMenu,
  setActiveCategory,
} from "../../redux/menu-items/menu-items.reducer";
export const MenuCategory = () => {
  const Arr = useSelector((state) => state.menu.items);
  const activeCategory = useSelector((state) => state.menu.activeCategory);
  const m = new Map();

  const [newArr, setnewArr] = useState(null);

  useEffect(() => {
    Arr.forEach((element) => {
      m.set(element.name, element.emoji);
    });
    setnewArr(Array.from(m));
  }, [Arr]);
  const dispatch = useDispatch();

  return (
    <div className="lg-[92%] w-full min-h-18 mb-3  px-4 ">
      <div className="categories flex justify-between items-center overflow-x-scroll snap-x snap-mandatory">
        {newArr?.map(([name, emoji], i) => {
          return (
            <div
              key={i}
              className={`${
                name === activeCategory
                  ? "bg-[#ff9000] text-white"
                  : "text-gray-500 border-2 border-gray-500"
              }   w-[400px]  rounded-[27px] p-4 m-1 snap-start snap-always flex items-center justify-between transition ease-linear duration-300`}
              onClick={() => {
                dispatch(filterMenu(name));
                dispatch(setActiveCategory(name));
              }}
            >
              <h1>{name}</h1>
              <h1 className="ml-4">{emoji}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
