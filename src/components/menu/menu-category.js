import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMenu } from "../../redux/menu-items/menu-items.reducer";
export const MenuCategory = () => {
  const Arr = useSelector((state) => state.menu.items);
  const m = new Map();

  const [newArr, setnewArr] = useState(null);
  useEffect(() => {
    Arr.forEach((element) => {
      m.set(element.name, element.emoji);
    });
    setnewArr(Array.from(m));
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="w- h-28  px-6 ">
      <div className="flex justify-between items-center overflow-x-scroll snap-x snap-mandatory">
        {newArr?.map(([name, emoji], i) => {
          console.log(name);
          return (
            <div
              key={i}
              className="w-[400px] border-2 border-gray-500 rounded-[27px] p-4 m-1 snap-start snap-always flex items-center justify-between hover:bg-slate-200 transition ease-linear duration-300"
              onClick={() => {
                dispatch(filterMenu(name));
              }}
            >
              <h1 className="text-gray-500">{name}</h1>
              <h1 className="ml-4">{emoji}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
