/**
 * import { createStore, applyMiddleware } from 'redux';
 * import { composeWithDevTools } from 'redux-devtools-extension';
 * import thunk from 'redux-thunk';
 * const middleware = [thunk];
 * const store = createStore(
 * rootReducer,
 * composeWithDevTools(applyMiddleware(...middleware))
 * );
 * export default store;
*/


import rootReducer from "./store/Reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

export default store;