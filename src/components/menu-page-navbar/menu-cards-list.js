import { MenuCard } from "./menu-card";
// import { Arr } from "../assets/data";
import { useSelector } from "react-redux";
import { selectMenu } from "../../redux/menu-items/menu-items.reducer";
export const MenuCardsList = () => {
  const Arr = useSelector(selectMenu)
  return (
    <div className="w-full h-auto p-6 snap-y snap-mandatory grid place-content-center place-items-center gap-7 grid-rows-max sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
      {Arr.map((item, i) => {
        let randomNumber = (Math.random() * 4 + 1).toFixed();
        let randomNumber2 = (Math.random() * 50 + 1).toFixed();
        let stars;
        for (i = 0; i < randomNumber; i++) {
          stars += "⭐️";
        }
        const newStar = [stars].filter(Boolean)[0].slice(9);
        const source = "https://source.unsplash.com/random/?Burger";
        return (
          <MenuCard
            key={i * Math.random()}
            rating={newStar}
            name={item.name}
            price={randomNumber2}
            category={item.name}
            source={source}
          />
        );
      })}
    </div>
  );
};
