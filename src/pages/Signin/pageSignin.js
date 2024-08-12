import React from 'react'
import ScrollUp from '../../components/scrollUp/ScrollUp'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Signin from '../../components/signin/Signin'

export default function pageRegister() {
  return (
    <div>
      <Header/>
      <ScrollUp/>
      <Signin />
      <Footer/>
    </div>
  )
}