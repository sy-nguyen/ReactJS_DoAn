import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header.js';
import Test from './components/notfound/Test.js';


export default function App() {
  return (
    <div>
        <Header/>
        <Test/>
    </div>
  )
}
