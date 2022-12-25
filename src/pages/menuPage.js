import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import {
  MenuCategory,
  MenuCardsList,
  MenuNav,
  MenuOptions,
} from "../components/menu";
import { MenuModal } from "../components/menu/menu-modal";
import { CartSidebar } from "../components/sidebar/sidebar";
import {
  selectHidden,
  selectModalValues,
} from "../redux/menu-items/menu-items.reducer";
import { selectSidebarState } from "../redux/sidebar/sidebar.toolkit";
export const MenuPage = () => {
  const sidebarState = useSelector(selectSidebarState);
  const selectModalVisibilty = useSelector(selectHidden);
  const { name, price, time, category, source, quantity, id } =
    useSelector(selectModalValues);
  const [modifiedQuantity, setmodifiedQuantity] = useState(quantity);
  const changeQuantity = useMemo((val) => {
    return setmodifiedQuantity(val);
  }, []);
  const scrollRef = useRef(null);
  useEffect(() => {
    console.log(scrollRef.current);
  }, []);

  useEffect(() => {
    setmodifiedQuantity(quantity);
  }, [quantity]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col lg:w-[92vw] w-screen min-h-screen h-auto overflow-y-scroll "
    >
      <CartSidebar sidebarState={sidebarState} />
      {!selectModalVisibilty && (
        <MenuModal
          id={id}
          name={name}
          price={price}
          time={time}
          category={category}
          source={source}
          quantity={modifiedQuantity}
          setmodifiedQuantity={changeQuantity}
        />
      )}
      <MenuNav />
      <MenuOptions />
      <MenuCategory />
      <MenuCardsList setmodifiedQuantity={changeQuantity} />
    </motion.div>
  );
};
