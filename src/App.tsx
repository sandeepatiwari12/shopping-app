import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
// Redux
import store from "./store";
import { Provider } from "react-redux";
// Components
import Navbar from '@components/Navbar';
import Loader from '@components/Loader';
// Pages
const Cart = React.lazy(() => import(/* webpackPrefetch: true */ '@pages/Cart'))
const Products = React.lazy(() => import(/* webpackPrefetch: true */ '@pages/Products'));
const Shipping = React.lazy(() => import(/* webpackPrefetch: true */ '@pages/Shipping'));

const App = () => {
  return (<Provider store={store}>
    <Router>
      <Navbar />
      <Box padding={3}>
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loader />}><Navigate to="/products" /></Suspense>} />
          <Route path="/products" element={<Suspense fallback={<Loader />}><Products /></Suspense>} />
          <Route path="/cart" element={<Suspense fallback={<Loader />}><Cart /></Suspense>} />
          <Route path="/shipping/*" element={<Suspense fallback={<Loader />}><Shipping /></Suspense>} />
        </Routes>
      </Box>
    </Router>
  </Provider>);
}

export default App;
