import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { CartReducer } from "./cart/cart.toolkit";
import MenuReducer from "./menu-items/menu-items.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartToolkit from "./cart/cart.toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ menu: MenuReducer, cart: cartToolkit });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  // Add other middlewares here if you have any
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export default store;

export const persistor = persistStore(store);
