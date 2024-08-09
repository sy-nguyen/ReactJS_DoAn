import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home.js';
import Product from './pages/product/PageProduct.js';
import PageCart from './pages/cart/PageCart.js'
import Register from './pages/register/Register.js';
import ProductDetail from './pages/productDetail/ProductDetail.js';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}
