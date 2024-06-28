import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
