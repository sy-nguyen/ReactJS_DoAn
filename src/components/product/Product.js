import React from 'react'
import {
  Button,
  CardBody,
  CardText,
  Col,
  CardTitle,
  Card,
} from "reactstrap";
//import Swal from 'sweetalert2'

export default function Product(props) {
  const { product } = props;
  
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="">
      <Card>
        <img alt="Sample" src={product.images[0]}/>
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>
            {product.brand}
            {/* <a to={`/detail/${product.id}`}>Chi tiết sản phẩm</a> */}
          </CardText>
          <CardText>
            {product.price}
          </CardText>
          <Button className='btn btn-success'>Add cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
