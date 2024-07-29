import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Row } from 'reactstrap';
import Product from '../product/Product.js';

export default function Products() {
    const url ="https://66a07bf97053166bcabb907f.mockapi.io/Student"
    const [data, setData]= useState([])
    const fetchData = () =>{
        axios.get(url)
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
        <Container>
            <Row>
                {
                    data&&data.map((item, index)=>(<Product key={index} product={item}/>
                    ))
                }
            </Row>
        </Container>
    </div>
  )
}
