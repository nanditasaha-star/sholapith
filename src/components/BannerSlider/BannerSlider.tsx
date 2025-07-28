import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { bannerSliders } from "@/configs/homeslider-config"

export default function BannerSlider() {
  return (
    <div className=''>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        // navigation={{
        //   prevEl: '.swiper-button-prev',
        //   nextEl: '.swiper-button-next',
        // }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay , Navigation]}
        className="mySwiper"
      >
        {bannerSliders.map((bannerSlider)=> (
          <SwiperSlide key={bannerSlider.id}>
          <div className="">
              <Image width="300" height="200" className="" src={bannerSlider.imgUrl} alt="" />
          </div>
        </SwiperSlide>
        ))}
         
      </Swiper>
    </div>
  );
}
