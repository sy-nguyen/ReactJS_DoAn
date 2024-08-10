import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cart from '../../components/cart/Cart'
import { Container } from 'reactstrap'
import './pageCart.css'
import ScrollUp from '../../components/scrollUp/ScrollUp'
import { Link } from 'react-router-dom'

export default function PageCart() {
  return (
    <div>
      <ScrollUp/>
        <Header/>
          <div className='title-cart'>
            <Container>
                <h1>Giỏ hàng</h1>
                <div className='title-sup'><Link to='/' >Trang chủ </Link><span> / Giỏ hàng</span></div>
            </Container>
          </div>
        <Cart/>
      <Footer/>
    </div>
  )
}
