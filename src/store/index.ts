import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./product.slice";
import { cartSlice } from "./cart.slice";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer
    }
})