import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function ProductDetail() {
    const {id}=useParams()
    const [data, setData] = useState({})
    const url ="https://66a07bf97053166bcabb907f.mockapi.io/Student"
    const fetchData = () =>{
        axios.get(url + "/" + id)
        .then(function(res){
            setData(res.data)
        })
        .catch(function(err){
            console.log(err);
        });
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        <Header/>
        <h1>Product detail: {id}</h1>
        <p>name: {data.name}</p>
        <Footer/>
    </div>
  )
}
