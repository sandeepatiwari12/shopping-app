import React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
// Redux
import store from "./store";
import { Provider } from "react-redux";
// Pages
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import Shipping from '@pages/Shipping';
// Components
import Navbar from './Components/Navbar';

const App = () => {
  return (<Provider store={store}>
    <Router>
      <Navbar />
      <Box padding={3}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </Box>
    </Router>
  </Provider>);
}

export default App;
