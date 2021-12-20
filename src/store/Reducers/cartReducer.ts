import { IAction, IProduct } from "../type";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
  REMOVE_FROM_CART
} from "../actionTypes";
let CART_KEY = "Cart";

const initialState = {
  loading: false,
  list: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
};

const cartReducer = (state = initialState, action: IAction) => {
  const { type, payload, error } = action;
  switch (type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      const isExist = state.list
        .map((item: IProduct) => item.id)
        .includes(payload.id);
      let cartItems = [];
      if (isExist) {
        const items = state.list.map((item: IProduct) => {
          if (item.id === payload.id) {
            let qty = item.quantity + payload.quantity;
            return {
              ...item,
              quantity: qty,
              total: item.price * qty,
            };
          }
          return item;
        });
        cartItems = [...items];
      } else {
        cartItems = [
          ...state.list,
          { ...payload, total: payload.price * payload.quantity },
        ];
      }
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
      return {
        ...state,
        loading: false,
        list: cartItems,
      };
    case ADD_TO_CART_FAILED:
      return {
        ...state,
        error,
        loading: false,
      };
    case REMOVE_FROM_CART:
      let cartItem = state.list.filter(
        (item: IProduct) => item.id !== payload.id
      );
      localStorage.setItem(CART_KEY, JSON.stringify(cartItem));
      return {
        ...state,
        list: cartItem,
      };
    default:
      return state;
  }
};
export default cartReducer;
