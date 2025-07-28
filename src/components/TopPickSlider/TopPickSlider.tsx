import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import styles from './productSlider.module.css'
import { productSliders } from "@/configs/homeslider-config"
// import { sliders } from "@/configs/slider-config"

export default function TopPickSlider() {
  return (
    <div className=''>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        centeredSlides={true}
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
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation]}
        className="prodSwiper"
      >
        {productSliders.map((productSlider) => (
          <SwiperSlide key={productSlider.id}>
            <div className={styles.topProductItem}>
              <Image width="300" height="200" className="" src={productSlider.imgUrl} alt="" />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
