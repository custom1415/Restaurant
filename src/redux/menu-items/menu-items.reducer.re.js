// import { createSlice, original } from "@reduxjs/toolkit";
// import { modifiedFakearr } from "../../components/assets/data";
// import { createSelector } from "@reduxjs/toolkit";

// const initialState = {
//   items: modifiedFakearr,
//   filteredItems: modifiedFakearr,
//   modalValues: {
//     name: "default",
//     price: "default",
//     rating: "default",
//     time: "default",
//     quantity: "default",
//   },
//   hidden: true,
//   favourites: [],
// };

// const menuSlice = createSlice({
//   name: "menu",
//   initialState,
//   reducers: {
//     filterMenu(state, action) {
//       return {
//         ...state,
//         filteredItems: [...state.items].filter((item) => {
//           if (action.payload === "All") return modifiedFakearr;

//           return item.name === action.payload;
//         }),
//       };
//     },
//     sortMenu(state, action) {
//       return {
//         ...state,
//         filteredItems: state.filteredItems.slice().sort((a, b) => {
//           if (action.payload === "high-to-low") {
//             return b["price"] - a["price"];
//           }
//           return a["price"] - b["price"];
//         }),
//       };
//     },
//     showDiscountedItems(state) {
//       return {
//         ...state,
//         filteredItems: [...state.filteredItems].filter(
//           (item) => item["discount"]
//         ),
//       };
//     },
//     setHidden(state, action) {
//       return {
//         ...state,
//         hidden: action.payload,
//       };
//     },
//     setFavourites(state, action) {
//       const { isFavourite, item } = action.payload;
//       if (isFavourite) {
//         return {
//           ...state,
//           favourites: [...state.favourites].filter(
//             (itemFav) => itemFav.name !== item.name
//           ),
//         };
//       }
//       return {
//         ...state,
//         favourites: [...state.favourites, { ...item, isFavourite: true }],
//       };
//     },
//     setQuantityOnFilteredList(state, action) {
//       const { name, quantity } = action.payload;
//       const modifiedList = state.filteredItems.map((item) => {
//         if (item.name === name) {
//           return { ...item, quantity };
//         }
//         return item;
//       });
//       return {
//         ...state,
//         filteredItems: modifiedList,
//       };
//     },
//     setModalValue(state, action) {
//       return {
//         ...state,
//         modalValues: {
//           ...state.modalValues,
//           ...action.payload,
//         },
//       };
//     },
//   },
// });

// export const {
//   filterMenu,
//   showDiscountedItems,
//   sortMenu,
//   setQuantityOnFilteredList,
//   setFavourites,
//   setModalValue,
// } = menuSlice.reducer;
