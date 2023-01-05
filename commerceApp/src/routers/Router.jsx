import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';
function Router() {
  return (
   
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route  path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Checkout" element={<ProtectedRoute>
            <Checkout />
          </ProtectedRoute>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Shop/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    
  )
}

export default Router