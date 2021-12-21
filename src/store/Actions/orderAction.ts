import { DispatchType } from "../type";
import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  CLEAR_CART,
  CLEAR_CUSTOMER_DETAILS
} from "../actionTypes";

export const addCustomerDetails =
  (payload: any) => (dispatch: DispatchType) => {
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

export const createOrder = (payload: any) => (dispatch: DispatchType) => {
  dispatch({
    type: CREATE_ORDER_REQUEST,
  });

  fetch("https://test.ejam.com/api/recruitment/frontendtask1/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: CREATE_ORDER_SUCCESS,
      });
    }).then(() => {
      dispatch({
        type: CLEAR_CART
      })
    }).then(() => {
      dispatch({
        type: CLEAR_CUSTOMER_DETAILS
      })
    })
    .catch((error) => {
      dispatch({
        error,
        type: CREATE_ORDER_FAILED,
      });
    });
};
