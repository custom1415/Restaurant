import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, selectCartItems } from "../../redux/cart/cart.toolkit";
// import { addItemTocart } from "../../redux/cart/cart.actions";
// import { selectCartItems } from "../../redux/cart/cart.selectors";
import {
  selectFavourites,
  setHidden,
  setModalValue,
  setQuantityOnFilteredList,
} from "../../redux/menu-items/menu-items.reducer";
// const squareVariants = {
//   visible: { opacity: 1, transition: { duration: 0.3 } },
//   hidden: { opacity: 0 },
// };

export const MenuCard = ({
  name,
  price,
  category,
  rating,
  source,
  discount,
  persistedQuantity,
  id,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const favourite = useSelector(selectFavourites);

  useEffect(() => {
    favourite.forEach((item) => {
      console.log(item);
      if (item.id === id) {
        setIsFavourite(item.isFavourite);
      }
    });
  }, [favourite]);

  const [quantity, setQuantity] = useState(persistedQuantity);

  // States
  const [cartCount, setcartCount] = useState(persistedQuantity);
  const productToAdd = { name, price, rating, source, discount, quantity, id };
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const closeModal = () => dispatch(setHidden(false));
  // const controls = useAnimation();
  // const [ref, inView] = useInView();
  //
  //
  const addToCart = (e) => {
    e.stopPropagation();
    console.log(quantity, persistedQuantity);
    if (quantity === persistedQuantity) return;

    // dispatch(setQuantityOnFilteredList({ id, name, quantity }));
    dispatch(addItemToCart({ cartItems, productToAdd }));

    console.log(quantity);
    setcartCount(quantity);
  };
  //
  //

  //
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  //   if (!inView) {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);
  //
  //
  const discountAmount = price * (discount / 100);
  const newPrice = price - discountAmount;

  // ref={ref}
  // animate={controls}
  // initial="hidden"
  // variants={squareVariants}

  const handleQuantityChange = (e) => {
    if (e.target.dataset.name === "add") setQuantity(quantity + 1);
    if (e.target.dataset.name === "remove") {
      if (quantity === 0) {
        setQuantity(0);
        return;
      }
      setQuantity(quantity - 1);
    }
  };
  return (
    <motion.div
      onClick={() => {
        dispatch(
          setModalValue({
            name,
            price,
            rating,
            time: price,
            category,
            source,
            quantity,
            id,
          })
        );
        closeModal();
      }}
      className="relative w-full h-auto px-6 py-4 snap-center snap-always flex flex-col items-start justify-between rounded-3xl bg-[#f4f9fb] transition ease-linear duration-300 only:"
    >
      {/* <MenuModal
        name={name}
        price={price}
        source={source}
        rating={rating}
        category={category}
      /> */}
      {discount > 1 ? (
        <div className="absolute top-[-10px] right-[-10px] rounded-[50%] bg-[#ff4444] w-12 h-12 z-10  grid place-items-center text-white text-lg">
          -{discount}%
        </div>
      ) : null}

      {/* <div className="writing  absolute left-[50%] bottom-[-30px] translate-x-[-50%] rounded-2xl bg-[#d19764] w-[60%] h-8 z-10 flex flex-col justify-center items-center text-white text-lg">
        {rating}
      </div> */}

      <div className="imgName relative w-full h-44 mb-2 rounded-3xl">
        <img className=" w-full h-full rounded-3xl object-cover" src={source} />
        <p className="absolute bottom-0 left-[50%] translate-x-[-50%] text-xl text-white">
          {name}
        </p>
        {isFavourite && (
          <div className="w-6 h-6 absolute top-[8px] left-[8px] rounded-[50%] bg-red-500 grid place-items-center text-white">
            <AiFillHeart />
          </div>
        )}
      </div>
      <div className="flex justify-between items-end w-full h-12  ">
        <div className="flex flex-col justify-between items-start">
          <p className="text-2xl text-[#ff9f00] mr-2">
            {discount > 0 ? (
              <span className=" relative left-[-5px]">
                ${newPrice.toFixed()}
              </span>
            ) : null}
            <span
              className={`${discount && "text-gray-300 line-through text-sm"}`}
            >
              ${price}
            </span>
          </p>
          <p className="text-sm text-gray-300 ">
            {price * Math.PI.toFixed()} min
          </p>
        </div>

        <div
          className="flex bg-gray-200 justify-between rounded-3xl h-12 items-center  sm:w-[auto] w-[45%] p-2 mx-auto "
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            data-name="remove"
            onClick={handleQuantityChange}
            whileTap={{ scale: 2.5 }}
            className="box-shadow flex justify-center items-center h-[32px] w-[32px]  hover:scale-105  bg-[#ff9f00] px-3 py-1 text-white rounded-[50%]"
          >
            -
          </motion.div>
          <span className=" mx-3">{quantity}</span>
          <motion.div
            data-name="add"
            onClick={handleQuantityChange}
            whileTap={{ scale: 2.5 }}
            className=" box-shadow flex justify-center items-center  hover:scale-105  bg-[#ff9f00] px-3 py-1 text-white rounded-[50%] h-[32px] w-[32px]"
          >
            +
          </motion.div>
        </div>

        <motion.div
          whileTap={{ scale: 2.5 }}
          className=" relative flex justify-center items-center rounded-[50%]  bg-[#ff9f00]  hover:bg-[#ff9f00]  hover:scale-105 ease-linear w-12 h-12 "
          onClick={addToCart}
        >
          {cartCount > 0 && (
            <div className="w-6 h-6 absolute top-[-4px] right-[-6px] rounded-[50%] bg-red-500 grid place-items-center text-white">
              {cartCount}
            </div>
          )}
          <button className="font-bold  text-white ">
            <FiShoppingCart className="text-xl" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
