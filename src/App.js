import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer.js';
import Partner from './components/partner/Partner.js';
import Banner from './components/banner/Banner.js';
import ScrollUp from './components/scrollUp/ScrollUp.js';
import Products from './components/products/Products.js';
import Header from './components/header/Header.js';


export default function App() {
  return (
    <div>
        <ScrollUp/>
        <Header/>
        <Banner/>
        <Products/>
        <Partner/>
        <Footer/>
    </div>
  )
}
