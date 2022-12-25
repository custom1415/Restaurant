import { createSelector, createSlice } from "@reduxjs/toolkit";


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

        isSidebarHidden: !state.isSidebarHidden,
      };
    },
  },
});

export const { toggleSidebar } = searchSlice.actions;
export default searchSlice.reducer;
