import React from "react";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Auth from "./Auth/Auth";
import Payment from "./Payment/Payment";
import Orders from "./Order/Orders";
import Cart from "./Cart/Cart";
import Result from "./Results/Result"
import ProductDetail from './ProductDetail/ProductDetail'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
