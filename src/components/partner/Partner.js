import React from 'react'
import "./partner.css"
import { Container } from 'reactstrap'
import img1 from '../../Images/logo_partner/img1.png'
import img2 from '../../Images/logo_partner/img2.png'
import img3 from '../../Images/logo_partner/img3.png'
import img4 from '../../Images/logo_partner/img4.png'
import img5 from '../../Images/logo_partner/img5.png'
import img6 from '../../Images/logo_partner/img6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Partner() {

    const imgs = [img1, img2, img3, img4, img5, img6]
    return (
        <Container className='partner'>
            <h1 className='text-center p-5'>Đối tác của chúng tôi</h1>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={50}
                grabCursor={true}
                pagination={false}
                autoplay={{
                    delay: 2000, // Chuyển sang slide khác sau 3 giây
                    disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác với Swiper
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    770: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 70,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 70,
                      }
                  }}
            >
                {
                    imgs.map((img, index) => (
                        <SwiperSlide key={index}><img src={img} alt='partner'/></SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    )
}
