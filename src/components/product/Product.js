import React from 'react'
import {Button, CardBody, Col, Card} from "reactstrap";
import './product.css'
import { Rate } from 'antd';

//import Swal from 'sweetalert2'

export default function Product(props) {
  const { product } = props;
  
  return (
    <Col lg={3} md={4} sm={6} xs={6} className='mb-3'>
      <Card>
        <img className='p-1' alt="Sample" src={product.images[0]}/>
        <CardBody>
          <p className='product-name'>{product.name}</p>
          <p className='brand'>{product.brand}</p>
          <p className='price-product'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
            <span className='price-real'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
          </p>
            {/* <p>discout</p> */}
          <div><Rate disabled defaultValue={product.rating} /></div>
          <Button className='btn-add'>Add to cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
