import { createSelector, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const selectSidebar = (state) => state.sidebar;
export const selectSidebarState = createSelector(
  [selectSidebar],
  (state) => state.isSidebarHidden
);

const searchSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarHidden: true,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      return {
        ...state,

        isSidebarHidden: action.payload,
      };
    },
  },
});

export const { toggleSidebar } = searchSlice.actions;
export default searchSlice.reducer;
