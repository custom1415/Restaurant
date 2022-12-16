import { createReducer ,createAction} from "@reduxjs/toolkit";
import { fakearr } from "../../components/assets/data";
import { createSelector } from "@reduxjs/toolkit";
const selectMenuReducer = (rootState) => rootState.menu;
export const selectMenu = createSelector(
  [selectMenuReducer],
  (state) => state.items
);
const filterMenu = createAction('menu/filterMenu',)
const initialState = { items: fakearr };
const reducer = createReducer(initialState, {});
export default reducer;
