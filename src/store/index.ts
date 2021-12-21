import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@store/Reducers/productReducer";
import cartReducer from "@store/Reducers/cartReducer";
import orderReducer from "@store/Reducers/orderReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

export default store;
