import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../Images/banner/banner1.jpg'
import banner2 from '../../Images/banner/banner2.jpg'
import banner3 from '../../Images/banner/banner3.1.jpg'
import banner4 from '../../Images/banner/banner4.1.jpg'
import banner5 from '../../Images/banner/banner5.jpg'

export default function App() {
    const banners = [banner1, banner2, banner3, banner4, banner5]
  return (
    <div className='banner'>  
        <Swiper 
            style={{
                '--swiper-navigation-color': '#1D337F',
                '--swiper-pagination-color': '#1D337F',
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                banners.map((banner, index) => (
                    <SwiperSlide key={index}><img src={banner} alt='banner'/></SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  );
}
