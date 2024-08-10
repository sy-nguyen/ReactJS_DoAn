import React, { useState } from 'react';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper/modules';
import './imageProduct.css'

const ImageProduct = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = (image) => {
    setPreviewVisible(true);
    setPreviewImage(image);
  };

  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#0068C8',
          '--swiper-pagination-color': '#0068C8',
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs, Zoom]}
        className="swiper-img-product"
        zoom={true}
      >
        {product.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt=""
              preview={{
                visible: previewVisible,
                onVisibleChange: (visible) => setPreviewVisible(visible),
                src: previewImage,
              }}
              onClick={() => handlePreview(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-img-product-thumbs"
      >
        {product.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        items={product.images}
        preview={{
          visible: previewVisible,
          onVisibleChange: (visible) => setPreviewVisible(visible),
          src: previewImage,
        }}
      />
    </div>
  );
};

export default ImageProduct;