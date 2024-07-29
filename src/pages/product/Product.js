import React from 'react'
import Header from '../../components/header/Header.js'
import Products from '../../components/products/Products.js'
import Footer from '../../components/footer/Footer'

export default function Product() {
  return (
    <div>
        <Header/>
        <h1>Products</h1>
        <Products/>
        <Footer/>
    </div>
  )
}
