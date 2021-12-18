import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "../actionTypes";

const initialState = {
  loading: false,
  products: [],
};

const productReducer = (state = initialState, action: IAction) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        ...initialState,
        loading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        error,
        loading: false,
        users: undefined,
      };
    default:
      return state;
  }
};
export default productReducer;
