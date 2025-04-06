import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import sliderImage1 from "../../../public/assets/home/slide1.jpg"
import sliderImage2 from "../../../public/assets/home/slide2.jpg"
import sliderImage3 from "../../../public/assets/home/slide3.jpg"
import sliderImage4 from "../../../public/assets/home/slide4.jpg"
import sliderImage5 from "../../../public/assets/home/slide5.jpg"
const CategorySlide = () => {
  return (
    <div className="my-8">
      <div className="text-center flex flex-col items-center justify-center mb-5 gap-3">
        <p className="text-xs lg:text-sm text-amber-300 font-Inter">
          ---From 11:00am to 10:00pm---
        </p>
        <p className="border-t-2 border-b-2 w-2/5 text-center text-xl lg:text-4xl p-2 font-Cinzel font-semibold">
          Order Online
        </p>
      </div>
      <Swiper
        direction="horizontal"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        className="h-[50vh]"
      >
        <SwiperSlide>
          <div className="h-full relative bg-center bg-cover" style={{backgroundImage: `url(${sliderImage1})`}}>
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center font-Cinzel text-2xl uppercase w-full p-6 bg-base-200/75">
              Salad
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full relative bg-center bg-cover" style={{backgroundImage: `url(${sliderImage2})`}}>
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center font-Cinzel text-2xl uppercase w-full p-6 bg-base-200/75">
              Pizzas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full relative bg-center bg-cover" style={{backgroundImage: `url(${sliderImage3})`}}>
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center font-Cinzel text-2xl uppercase w-full p-6 bg-base-200/75">
              Soup
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full relative bg-center bg-cover" style={{backgroundImage: `url(${sliderImage4})`}}>
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center font-Cinzel text-2xl uppercase w-full p-6 bg-base-200/75">
              Cake
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full relative bg-center bg-cover" style={{backgroundImage: `url(${sliderImage5})`}}>
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center font-Cinzel text-2xl uppercase w-full p-6 bg-base-200/75">
              Desserts
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlide;
