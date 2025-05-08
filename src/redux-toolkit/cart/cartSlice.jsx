// // redux-toolkit/cart/cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


// redux-toolkit/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartIncrement: (state) => {
      state.value += 1;
    },
    cartDecrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    cartDeleteAll: (state) => {
      state.value = 0;
    },
  },
});

export const { cartIncrement, cartDecrement, cartDeleteAll } = cartSlice.actions;
export default cartSlice.reducer;
