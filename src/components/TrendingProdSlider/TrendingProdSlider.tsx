import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import styles from './productSlider.module.css'
import { productLists } from '@/configs/product-config';
import ProductBox from '../ProductBox/ProductBox';
// import { sliders } from "@/configs/slider-config"



export default function TrendingSlider() {
  return (
    <div className=''>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        centeredSlides={false}
        // navigation={{
        //   prevEl: '.swiper-button-prev',
        //   nextEl: '.swiper-button-next',
        // }}
        loop={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="trendingSwiper"
      >
        
        {productLists.map((list) => {
            const firstProduct = list.products[0];
            return (
              <SwiperSlide key={firstProduct.id}>
                <ProductBox product={firstProduct} />
              </SwiperSlide>
            );
          })}

      </Swiper>
    </div>
  );
}
