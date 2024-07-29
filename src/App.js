import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home.js';
import Product from './pages/product/Product.js';
import ProductDetail from './pages/productDetail/ProductDetail.js'
import Register from './pages/register/Register.js'
import NotFound from './components/notfound/NotFound.js'
import Cart from './components/cart/Cart.js';
import { AppProvider } from './AppContext.js';

export default function App() {
  return (
    <div>
    <AppProvider>
        <Router>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/detail/:id' element={<ProductDetail />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </Router>
    </AppProvider>
    </div>
  )
}
