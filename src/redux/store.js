import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import MenuReducer from "./menu-items/menu-items.reducer";

const store = configureStore({
  reducer: { menu: MenuReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
