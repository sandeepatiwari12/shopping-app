import { IAction } from "../type";
import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILED,
  CUSTOMER_KEY
} from "../actionTypes";

const initialState = {
  loading: false,
  customer: JSON.parse(localStorage.getItem(CUSTOMER_KEY) || "{}"),
};


const cartReducer = (state = initialState, action: IAction) => {
  const { type, payload, error } = action;
  switch (type) {
    case ADD_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CUSTOMER_SUCCESS:
      console.log('payload', payload);
      
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        customer: payload,
      };
    case ADD_CUSTOMER_FAILED:
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
};
export default cartReducer;
