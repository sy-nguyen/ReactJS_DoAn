import React from 'react'
import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'
import Banner from '../../components/banner/Banner.js'
import ScrollUp from '../../components/scrollUp/ScrollUp.js'
import Partner from '../../components/partner/Partner.js'
import ProductListDiscount from '../../components/productListDiscount/ProductListDiscount.js'
import ProductListNew from '../../components/productListNew/ProductListNew.js'
import SubscribeBox from '../../components/subscribeHome/SubscribeBox.js'

export default function Home() {
  return (
    <div>
        <ScrollUp/>
        <Header/>
        <Banner/>
        <ProductListDiscount/>
        <ProductListNew/>
        <SubscribeBox/>
        <Partner/>
        <Footer/>
    </div>
  )
}
