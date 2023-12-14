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
          <img src={img.gallery01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery03} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery04} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery05} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery06}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery07}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery08}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.gallery09}/>
        </SwiperSlide>
      </Swiper>

    </SGallery>
  );
}
