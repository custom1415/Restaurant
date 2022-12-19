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
console.log(modifiedFakearr);
const initialState = {
  items: modifiedFakearr,
  filteredItems: modifiedFakearr,
  modalValues: { name: "", price: "", rating: "", time: "" },
  hidden: true,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    filterMenu(state, action) {
      return {
        ...state,
        filteredItems: [...state.items].filter((item) => {
          if (action.payload === "All") return modifiedFakearr;

          return item.name === action.payload;
        }),
      };
    },
    Sort(state, action) {
      return {
        ...state,
        filteredItems: state.filteredItems.slice().sort((a, b) => {
          console.log(action.payload);
          return a[action.payload] - b[action.payload];
        }),
      };
    },

    setHidden(state, action) {
      return {
        ...state,
        hidden: action.payload,
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
export const { filterMenu, Sort, setModalValue,setHidden } = menuSlice.actions;
export default menuSlice.reducer;
