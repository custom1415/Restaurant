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
export const selectActiveCategory = createSelector(
  [selectMenuReducer],
  (state) => state.activeCategory
);

// export const selectQty = createSelector([selectMenuReducer], (state) => {

const initialState = {
  items: modifiedFakearr,
  filteredItems: modifiedFakearr,
  originalItems: modifiedFakearr,
  activeCategory: "All",
  categoryItems: [],
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
      let newList;

      if (action.payload === "All") {
        newList = state.originalItems;
      } else {
        newList = state.originalItems.filter(
          (item) => item.name === action.payload
        );
      }

      return {
        ...state,
        filteredItems: state.originalItems.filter((item) =>
          action.payload === "All"
            ? state.originalItems
            : item.name === action.payload
        ),
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
        filteredItems: [...state.filteredItems].filter((item) => {
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

      if (isFavourite) {
        return {
          ...state,
          favourites: [...state.favourites].filter(
            (itemFav) => itemFav.id !== item.id
          ),
          filteredItems: state.filteredItems.map((filteredItem) => {
            if (filteredItem.id === item.id) {
              return { ...filteredItem, isFavourite: false };
            }
            return filteredItem;
          }),
        };
      }
      return {
        ...state,
        favourites: [...state.favourites, { ...item, isFavourite: true }],
        filteredItems: state.filteredItems.map((filteredItem) => {
          if (filteredItem.id === item.id) {
            return { ...filteredItem, isFavourite: true };
          }
          return filteredItem;
        }),
      };
    },

    setQuantityOnFilteredList(state, action) {
      const { id, name, quantity } = action.payload;

      const modifiedList = [...state.originalItems].map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
      let newList;
      if (modifiedList.length === state.items.length) {
        newList = modifiedList;
      } else if (name === "All") {
        newList = modifiedList;
      } else {
        newList = modifiedList.filter((item) => item.name === name);
      }
      return {
        ...state,
        filteredItems: newList,
        originalItems: modifiedList,
      };
    },
    setActiveCategory(state, action) {
      return {
        ...state,
        activeCategory: action.payload,
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
  setActiveCategory,
} = menuSlice.actions;
export default menuSlice.reducer;
