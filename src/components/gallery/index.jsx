import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as img from '../../assets/gallery';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import SGallery from './style';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Gallery() {
  return (  
    <SGallery>

      
      <h1>Galeria</h1>
      <p>A música é a maneira de expressar suas emoções e aquilo que você gostou mais na vida – é uma das partes mais importantes de nossas vidas.</p>
      

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img.galleryOne} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.galleryTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.galleryThree} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.galleryFour} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.galleryFive} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallerySix}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallerySeven}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.galleryEight}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.galleryNine}/>
        </SwiperSlide>
      </Swiper>

    </SGallery>
  );
}
