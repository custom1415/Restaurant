import { createSlice, original } from "@reduxjs/toolkit";
import { modifiedFakearr } from "../../components/assets/data";
import { createSelector } from "@reduxjs/toolkit";
const selectMenuReducer = (rootState) => rootState.menu;
export const selectMenu = createSelector(
  [selectMenuReducer],
  (state) => state.filteredItems
);
export const selectModalValues = createSelector(
  [selectMenuReducer],
  (state) => state.modalValues
);
export const selectHidden = createSelector(
  [selectMenuReducer],
  (state) => state.hidden
);
export const selectFavourites = createSelector(
  [selectMenuReducer],
  (state) => state.favourites
);

// export const selectQty = createSelector([selectMenuReducer], (state) => {
//   const Find = state.filteredItems.find(
//     (item) => item.name === state.modalValues.name
//   );
// });
// let originalFilteredItems = [...state.filteredItems];

const initialState = {
  items: modifiedFakearr,
  filteredItems: modifiedFakearr,
  originalFilteredItems: [],
  modalValues: {
    name: "default",
    price: "default",
    rating: "default",
    time: "default",
    quantity: "default",
  },
  hidden: true,
  favourites: [],
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    filterMenu(state, action) {
      return {
        ...state,
        filteredItems: [...state.originalFilteredItems].filter((item) => {
          if (action.payload === "All") return state.originalFilteredItems;

          return item.name === action.payload;
        }),
      };
    },
    Sort(state, action) {
      return {
        ...state,
        filteredItems: state.filteredItems.slice().sort((a, b) => {
          if (action.payload === "high-to-low") {
            return b["price"] - a["price"];
          }
          return a["price"] - b["price"];
        }),
      };
    },
    showDiscountedItems(state, action) {
      return {
        ...state,
        filteredItems: [...state.originalFilteredItems].filter((item) => {
          if (item["discount"]) {
            return item;
          }
          return;
        }),
      };
    },
    setHidden(state, action) {
      return {
        ...state,
        hidden: action.payload,
      };
    },
    setFavourites(state, action) {
      const { isFavourite, item } = action.payload;
      console.log(action.payload);
      if (isFavourite) {
        return {
          ...state,
          favourites: [...state.favourites].filter(
            (itemFav) => itemFav.name !== item.name
          ),
        };
      }
      return {
        ...state,
        favourites: [...state.favourites, { ...item, isFavourite: true }],
      };
    },
    setQuantityOnFilteredList(state, action) {
      const { name, quantity } = action.payload;

      const modifiedList = state.filteredItems.map((item) => {
        if (item.name === name) {
          return { ...item, quantity };
        }
        return item;
      });

      return {
        ...state,
        filteredItems: modifiedList,
        originalFilteredItems: modifiedList,
      };
    },
    setModalValue(state, action) {
      console.log(action.payload);
      return {
        ...state,
        modalValues: {
          ...state.modalValues,
          ...action.payload,
        },
      };
    },
  },
});
export const {
  filterMenu,
  showDiscountedItems,
  Sort,
  setQuantityOnFilteredList,
  setFavourites,
  setModalValue,
  setHidden,
} = menuSlice.actions;
export default menuSlice.reducer;
