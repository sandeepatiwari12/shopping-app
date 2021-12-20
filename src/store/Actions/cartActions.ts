import { DispatchType, IProduct } from "../type";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
  REMOVE_FROM_CART,
} from "../actionTypes";

// Add to the cart
export const addToCart = (payload: IProduct) => (dispatch: DispatchType) => {
  dispatch({
    type: ADD_TO_CART_REQUEST,
  });
  try {
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    dispatch({
      error,
      type: ADD_TO_CART_FAILED,
    });
  }
};

// remove from cart
export const removeFromCart = (id: string) => (dispatch: DispatchType) => {
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  });
};
