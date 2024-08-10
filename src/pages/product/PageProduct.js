import React from 'react'
import Header from '../../components/header/Header.js'
import Products from '../../components/products/Products.js'
import Footer from '../../components/footer/Footer.js'
import ScrollUp from '../../components/scrollUp/ScrollUp.js'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <ScrollUp/>
        <Header/>
          <div className='title-cart'>
            <Container>
                <h1>Sản phẩm</h1>
                <div className='title-sup'><Link to='/'>Trang chủ </Link><span> / Sản phẩm</span></div>
            </Container>
          </div>
        <Products/>
        <Footer/>
    </div>
  )
}
