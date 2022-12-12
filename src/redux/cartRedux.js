import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartItems: 0,
    total: 0,
  },
  reducers: {
    addProduct: (currentState, action) => {
      currentState.cartItems += 1;
      currentState.products.push(action.payload);
      currentState.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
