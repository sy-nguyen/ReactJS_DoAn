import React from 'react'
import {Button, CardBody, Col, Card} from "reactstrap";
import { Link } from 'react-router-dom';
import './product.css'
import { Rate, Badge } from 'antd';

export default function Product(props) {
  const { product, addItem} = props;
  const c = 1
  const handleAddToCart = () => {
    addItem({product,c});
  }

  const discountPrice = product.price - (product.price * product.discout / 100);
  
  return (
    <Col lg={3} md={4} sm={6} xs={6} className='mb-3'>
      {product.status === "new" ? (
        <Badge.Ribbon text="Mới" color="blue">
          {product.discout !== "0" ? (
            <Badge.Ribbon text={`-${product.discout}%`} color="red">
              <Card>
                  <img className='p-1' alt="Sample" src={product.images[0]}/>
                <CardBody>
                  <Link to={`/product/${product.id}`}>
                    <p className='product-name'>{product.name}</p>
                  </Link>
                  <p className='brand'>{product.brand}</p>
                  <p className='price-product'>
                    <span>
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discountPrice)}
                      <span className='price-real'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
                    </span>
                  </p>
                  <div><Rate disabled defaultValue={product.rating} /></div>
                  <Button className='btn-add' onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                </CardBody>
              </Card>
            </Badge.Ribbon>
          ) : (
            <Card>
                <img className='p-1' alt="Sample" src={product.images[0]} onClick={() => {window.location.href = `/product/${product.id}`}}/>
              <CardBody>
                <Link to={`/product/${product.id}`}>
                  <p className='product-name'>{product.name}</p>
                </Link>
                <p className='brand'>{product.brand}</p>
                <p className='price-product'>
                  <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
                </p>
                <div><Rate disabled defaultValue={product.rating} /></div>
                <Button className='btn-add' onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
              </CardBody>
            </Card>
          )}
        </Badge.Ribbon>
      ) : (
        product.discout !== "0" ? (
          <Badge.Ribbon text={`-${product.discout}%`} color="red">
            <Card>
                <img className='p-1' alt="Sample" src={product.images[0]}/>
              <CardBody>
                <Link to={`/product/${product.id}`}>
                  <p className='product-name'>{product.name}</p>
                </Link>
                <p className='brand'>{product.brand}</p>
                <p className='price-product'>
                  <span>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discountPrice)}
                    <span className='price-real'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
                  </span>
                </p>
                <div><Rate disabled defaultValue={product.rating} /></div>
                <Button className='btn-add' onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
              </CardBody>
            </Card>
          </Badge.Ribbon>
        ) : (
          <Card>
              <img className='p-1' alt="Sample" src={product.images[0]}/>
            <CardBody>
              <Link to={`/product/${product.id}`}>
                <p className='product-name'>{product.name}</p>
              </Link>
              <p className='brand'>{product.brand}</p>
              <p className='price-product'>
                <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</span>
              </p>
              <div><Rate disabled defaultValue={product.rating} /></div>
              <Button className='btn-add' onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
            </CardBody>
          </Card>
        )
      )}
    </Col>
  );
}