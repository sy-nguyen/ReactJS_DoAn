import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Cart from '../../components/cart/Cart'
import {RightOutlined} from '@ant-design/icons'
import { Container } from 'reactstrap'
import './pageCart.css'
import ScrollUp from '../../components/scrollUp/ScrollUp'


export default function PageCart() {
  return (
    <div>
      <ScrollUp/>
      <Header/>
        <div className='title-cart'>
            <Container>
                <h1>Giỏ hàng</h1>
                <div className='title-sup'><a href='/' >Home </a><span> <RightOutlined high={15}/> Giỏ hàng</span></div>
            </Container>
          </div>
        <Cart/>
      <Footer/>
    </div>
  )
}
