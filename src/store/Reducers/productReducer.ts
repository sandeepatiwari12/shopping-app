import { IAction } from "../type";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "../actionTypes";

const initialState = {
  loading: false,
  list: [],
};

const productReducer = (state = initialState, action: IAction) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      // localStorage.setItem("products", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        list: payload,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
};
export default productReducer;
