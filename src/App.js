import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home.js';
import Product from './pages/product/PageProduct.js';
import PageCart from './pages/cart/PageCart.js'
import Signin from './pages/Signin/pageSignin.js';
import ProductDetail from './pages/productDetail/ProductDetail.js';
import NotFound from './components/notfound/NotFound.js';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<PageCart />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}
