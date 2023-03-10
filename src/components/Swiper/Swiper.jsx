import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import KavaStarogoLvovu from "../../static/img/kava-starogo-lvovu-logo.webp";
import KavaLviv from "../../static/img/kava-lviv-logo.png";
import KonservyMK from "../../static/img/konservy-mk-poland.png";
import Lovare from "../../static/img/lovare-logo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function TopPositions() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={KavaStarogoLvovu} alt="Кава Старого Львову" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KonservyMK} alt="Консерви торгової марки МК, Польща" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lovare} alt="Чай Ловаре" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
