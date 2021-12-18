import React from 'react';
import './App.scss';

import store from "./store";
import { Provider } from "react-redux";
import Landing from './Pages/Landing';

const App = () => {
  return (<Provider store={store}>
    <Landing />
  </Provider>);
}

export default App;
