import { useDispatch } from "react-redux";
export const MenuCategory = () => {
  const fakearr = [
    {
      name: "All",
      emoji: "",
    },
    {
      name: "Pizza",
      emoji: "🍕",
    },
    {
      name: "Burgers",
      emoji: "🍔",
    },
    {
      name: "Desserts",
      emoji: "🍧",
    },
    {
      name: "Pork",
      emoji: "🥓",
    },
    {
      name: "Beef",
      emoji: "🥩",
    },
    {
      name: "Tea",
      emoji: "🫖",
    },
    {
      name: "Coffee",
      emoji: "☕️",
    },
    {
      name: "Pasta",
      emoji: "🍝",
    },
    {
      name: "Drinks",
      emoji: "🥂",
    },
    // "All",
    // "Pizza",
    // "Burgers",
    // "Drinks",
    // "Desserts",🍕🍔🍧🥓🥩🫖☕️🍝🥂
    // "Chicken",
    // "Pork",
    // "Beef",
    // "Tea",
    // "Coffee",
    // "Pasta",
  ];
  const filterMenu = () => {};
  const dispatch = useDispatch();

  return (
    <div className="w- h-28  px-6 ">
      <div className="flex justify-between items-center overflow-x-scroll snap-x snap-mandatory">
        {fakearr.map((item, i) => {
          return (
            <div
              key={i}
              className="w-[400px] bg-[#1a0e2e] text-white rounded-[27px] p-4 m-1 snap-start snap-always flex items-center justify-between hover:bg-slate-200 transition ease-linear duration-300"
              onClick={() => dispatch(filterMenu)}
            >
              <h1 className="">{item.name}</h1>
              <h1 className="ml-4">{item.emoji}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
