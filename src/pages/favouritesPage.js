import { useSelector } from "react-redux";
import { MenuCard } from "../components/menu";
import { selectFavourites } from "../redux/menu-items/menu-items.reducer";

export const FavouritesPage = () => {
  const Favourites = useSelector(selectFavourites);

  return (
    <div className="flex flex-col justify-start p-6 lg:[w-92%] w-full">
      <h1 className="text-3xl mb-20 "> Favourites</h1>

      {Favourites.length ? (
        <div className="w-full h-autosnap-y snap-mandatory grid place-content-center place-items-center gap-7 grid-rows-max sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 ">
          {Favourites.map((item) => {
            const { id, name, price, quantity, rating, source } = item;

            return (
              <MenuCard
                key={id}
                id={id}
                name={name}
                category={name}
                price={price}
                persistedQuantity={quantity}
                rating={rating}
                source={source}
              />
            );
          })}
        </div>
      ) : (
        <h1 className="text-xl text-center">
          Your Favourites list is empty.
        </h1>
      )}
    </div>
  );
};
