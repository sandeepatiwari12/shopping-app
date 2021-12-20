import { DispatchType } from "../type";
import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILED,
} from "../actionTypes";

export const addCustomerDetails = (payload: any) => (dispatch: DispatchType) => {
  dispatch({
    type: ADD_CUSTOMER_REQUEST,
  });
  try {
    dispatch({
      payload,
      type: ADD_CUSTOMER_SUCCESS,
    });
  } catch (error) {
    dispatch({
      error,
      type: ADD_CUSTOMER_FAILED,
    });
  }
};

