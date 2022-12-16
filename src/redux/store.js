import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./menu-items/menu-items.reducer";

const store = configureStore({
  reducer: { menu: MenuReducer },
});

export default store;
