import React, { useMemo, memo, useCallback } from "react";
import { MenuCard } from "./menu-card";
// import { Arr } from "../assets/data";
import { useSelector } from "react-redux";
import {
  selectActiveCategory,
  selectMenu,
} from "../../redux/menu-items/menu-items.reducer";
import { selectCartItems } from "../../redux/cart/cart.toolkit";
// other imports here

export const MenuCardsList = memo(() => {
  // other code here
  const activeCategory = useSelector(selectActiveCategory);
  const menu = useSelector(selectMenu);
  const cartItems = useSelector(selectCartItems);
  const filteredArr = useMemo(() => {
    return menu.filter((category) => {
      if (activeCategory === "All") {
        return category;
      } else {
        return category.name === activeCategory;
      }
    });
  }, [menu, activeCategory]);

  const renderMenuCard = useCallback(
    (item, i) => {
      const { name, price, rating, discount, id, source } = item;
      const getQty = cartItems.find((item) => item.id === id);
      let quantity = 0;
      if (getQty) {
        const { quantity: qty } = getQty;
        quantity = qty;
      }

      let stars;
      for (i = 0; i < rating; i++) {
        stars += "★";
      }

      const newStar = [stars].filter(Boolean)[0].slice(9);
      const checkDiscount = discount ? discount : 0;

      return (
        <MenuCard
          key={i * Math.random()}
          id={id}
          rating={newStar}
          name={name}
          price={price}
          category={name}
          source={source}
          discount={checkDiscount}
          persistedQuantity={quantity}
        />
      );
    },
    [cartItems]
  );

  return (
    <div className="w-full h-auto p-6 snap-y snap-mandatory grid place-content-center place-items-center gap-7 grid-rows-max sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
      {filteredArr.map(renderMenuCard)}
    </div>
  );
});
