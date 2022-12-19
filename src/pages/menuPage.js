import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  MenuCategory,
  MenuCardsList,
  MenuNav,
  MenuOptions,
} from "../components/menu";
import { MenuModal } from "../components/menu/menu-modal";
import {
  selectHidden,
  selectModalValues,
} from "../redux/menu-items/menu-items.reducer";

export const MenuPage = () => {
  const selectModalVisibilty = useSelector(selectHidden);
  const { name, price, time ,category,source} = useSelector(selectModalValues);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col lg:w-[92vw] w-screen h-auto overflow-y-scroll "
    >
      {!selectModalVisibilty && (
        <MenuModal name={name} price={price} time={time} category={category} source={source}/>
      )}
      <MenuNav />
      <MenuOptions />
      <MenuCategory />

      <MenuCardsList />
    </motion.div>
  );
};
