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
    deleteProduct: (currentState, action) => {
      currentState.cartItems -= 1;
      let indexToDelete = currentState.products.findIndex(
        (item) => item._id === action.payload.id
      );
      //substract product
      currentState.total -=
        currentState.products[indexToDelete].price *
        currentState.products[indexToDelete].quantity;
      currentState.products.splice(indexToDelete, 1);
    },
    clearCart: (currentState) => {
      currentState.cartItems = 0;
      currentState.products = [];
      currentState.total = 0;
    },
  },
});

export const { addProduct, deleteProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
