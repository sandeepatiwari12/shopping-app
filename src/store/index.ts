import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productReducer";
import cartReducer from "./Reducers/cartReducer";
import orderReducer from "./Reducers/orderReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

export default store;
