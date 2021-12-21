import { IAction } from "../type";
import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  CLEAR_CUSTOMER_DETAILS,
  CUSTOMER_KEY,
} from "../actionTypes";

const initialState = {
  loading: false,
  customer: JSON.parse(localStorage.getItem(CUSTOMER_KEY) || "{}"),
  message: null,
};

const orderReducer = (state = initialState, action: IAction) => {
  const { type, payload, error } = action;
  switch (type) {
    case ADD_CUSTOMER_REQUEST:
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CUSTOMER_SUCCESS:
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        customer: payload,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
      case CLEAR_CUSTOMER_DETAILS: 
      localStorage.removeItem(CUSTOMER_KEY);
      return {
        ...state,
        customer: {}
      }
    case ADD_CUSTOMER_FAILED:
    case CREATE_ORDER_FAILED:
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
};
export default orderReducer;
