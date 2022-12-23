// import { CART_ACTION_TYPES } from "./cart.types";

// export const SET_CART_ITEMS = (cartItems) => {
//   return {
//     type: CART_ACTION_TYPES.SET_CART_ITEMS,
//     payload: cartItems,
//   };
// };

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.name === productToAdd.name
//   );
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.name === productToAdd.name
//         ? { ...cartItem, quantity: productToAdd.quantity }
//         : cartItem
//     );
//   }
//   return [...cartItems, { ...productToAdd }];
// };

// const removeCartItem = (cartItems, productToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToRemove.id
//   );
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
//   }
//   return cartItems.map((cartItem) =>
//     cartItem.id === productToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
// };
// export const clearItemfromCart = (cartItems, cartItemToClear) => {
//   const newCartItems = clearCartItem(cartItems, cartItemToClear);
//   return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
// };
// export const addItemTocart = (cartItems, productToAdd) => {
//   const newCartItems = addCartItem(cartItems, productToAdd);

//   return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
// };
// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//   return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
// };
