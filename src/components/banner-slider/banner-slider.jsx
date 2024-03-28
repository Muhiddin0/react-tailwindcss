import React from "react";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerItem from "./banner-item";

export default function BannerSlider() {
  return (
    <Swiper
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
      <SwiperSlide>
        <BannerItem />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem />
      </SwiperSlide>
    </Swiper>
  );
}
