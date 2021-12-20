import { DispatchType } from "../type";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED
} from "../actionTypes";

// Load Products
export const getProducts = () => async (dispatch: DispatchType) => {
  dispatch({
    type: GET_PRODUCTS_REQUEST,
  });

  fetch("https://test.ejam.com/api/recruitment/frontendtask1/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data.products,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_PRODUCTS_FAILED,
        error: err,
      });
    });
};
