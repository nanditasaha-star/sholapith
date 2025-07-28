import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import styles from "./eventSlider.module.css"
import { eventSliders } from "@/configs/homeslider-config"

export default function EventSlider() {
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
                    delay: 1000,
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
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }}
                modules={[Navigation]}
                className="eventSwiper"
            >
                {eventSliders.map((eventSlider) => (
                    <SwiperSlide key={eventSlider.id}>
                    <div className={`${styles.event} `}>
                        <div className="flex items-center justify-center">
                            <div className="eventImg w-1/2 overflow-hidden">
                                <Image width="300" height="200" className={`${styles.carouselImageContainer} `} src={eventSlider.imgUrl} alt="" />

                            </div>
                            <div className={`${styles.eventDetails}  w-1/2 px-10 `}>
                                <div className="detailsBox">
                                    <div className="flex items-center mb-6">
                                        <span className={`${styles.eventNo} text-xl`}>{eventSlider.id}</span>
                                        <p className="eventName whiteOrangeText">
                                        {eventSlider.eventName}
                                        </p>
                                    </div>
                                    <p className="text-left text-xl mb-6">
                                    {eventSlider.eventDesc}
                                    </p>
                                    <p className="text-left eventDate text-xl"> {eventSlider.eventDate}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}
