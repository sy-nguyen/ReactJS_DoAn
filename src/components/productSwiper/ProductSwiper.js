import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Product from '../product/Product';
import { addItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import './productSwiper.css'
import { Link } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";

export default function ProductSwiper(props) {
  const { products, nameTitle } = props
  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };
  return (
    <Container className="product-swiper">
      <div className='title-swiper p-3'>
        <h3 className="title-list">{nameTitle}</h3>
        <Link className='link-page-product' to="/product">Xem thêm <GoChevronRight/></Link>
      </div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#0068C8',
        }}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={false}
        navigation={{
          clickable: true,
          hideOnClick: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: false,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 50,
            centeredSlides: false,
          },
          770: {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            centeredSlides: true,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 50,
            centeredSlides: true,
          }
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Row>
              <Col xl={12}>
                <Product product={product} addItem={handleAddItem} />
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};