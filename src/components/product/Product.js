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
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>
            <p>{product.brand}</p>
            {/* <a to={`/detail/${product.id}`}>Chi tiết sản phẩm</a> */}
            <p>{product.price}</p>
          </CardText>
          <Button className='btn btn-success'>Add cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
