import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { cartItems, productToAdd } = action.payload;
      console.log(cartItems, productToAdd);
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.name === productToAdd.name
      );
      if (existingCartItem) {
        state.cartItems = cartItems.map((cartItem) =>
          cartItem.name === productToAdd.name
            ? { ...cartItem, quantity: productToAdd.quantity }
            : cartItem
        );

        console.log(state.cartItems);
      } else {
        state.cartItems.push(productToAdd);
      }
    },
    removeItemFromCart: (state, action) => {
      const { cartItems, productToAdd } = action.payload;
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );
      if (existingCartItem.quantity === 1) {
        state.cartItems = cartItems.filter(
          (cartItem) => cartItem.id !== productToAdd.id
        );
      } else {
        state.cartItems = cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const {
  setCartItems,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
