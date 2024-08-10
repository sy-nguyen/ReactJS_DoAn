import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ScrollUp from '../../components/scrollUp/ScrollUp';
import Header from '../../components/header/Header';
import ImageProduct from '../../components/imageProduct/ImageProduct';
import { Container } from 'reactstrap';
import Footer from '../../components/footer/Footer';
import { addItem } from '../../redux/cartSlice';
import './productDetail.css'
import { Col, Row, Tabs,} from 'antd';
import ProductInfo from '../../components/productInfo/ProductInfo';
import ProductDescription from '../../components/productDescription/ProductDescription';
import ProductReviews from '../../components/productReviews/ProductReviews';

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === id);
  const [quantity, setQuantity] = useState(1);
  const handleAddItem = (product, quantity) => {
    dispatch(addItem({ product, quantity }));
  }

  useEffect(() => {
    if (!product) {
    }
  }, [product]);

  return (
    <div>
      <ScrollUp/>
        <Header/>
        <div className='title-product-detail'>
          <Container>
            <p className='title-sup'><Link to='/'>Trang chủ </Link><span> / </span>
              <Link to='/product'>Sản phẩm</Link><span> / </span>
              <Link to='/'>{product.brand}</Link><span> / {product.name}</span>
            </p>
          </Container>
        </div>
        <Container className='py-5'>
          <Row>
            <Col className='col-img' md={24} lg={12}>
              <ImageProduct product={product}/>
            </Col>
            <Col className='col-info' md={24} lg={12}>
              <ProductInfo product={product} quantity={quantity} setQuantity={setQuantity} addItem={handleAddItem}/>
            </Col>
          </Row>
          <div>
            <Tabs defaultActiveKey="1" size='large'>
              <Tabs.TabPane tab="Mô tả sản phẩm" key="1">
                <ProductDescription product={product} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đánh giá sản phẩm" key="2">
                <ProductReviews product={product}/>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Container>
        <Footer/>
    </div>
  );
}