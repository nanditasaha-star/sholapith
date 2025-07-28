import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import styles from './reviewSlider.module.css'
import { reviewSliders } from "@/configs/homeslider-config"

export default function ReviewSlider() {
  return (
    <div className=''>
      <Swiper
        slidesPerView={3}
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
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation]}
        className="reviewSwiper"
      >
        {reviewSliders.map((reviewSlider) => (
          <SwiperSlide key={reviewSlider.id}>
            <div className={styles.testimonialBox}>
              <div className={styles.customerImg}>
                <Image src={reviewSlider.imgUrl} width="200" height="200" alt="" />
              </div>
              <div className={styles.customerName}>
                <h4>{reviewSlider.clientName}</h4>
                <p>{reviewSlider.clientDesg}</p>
              </div>
              <p>
                {reviewSlider.revText}
              </p>
            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
