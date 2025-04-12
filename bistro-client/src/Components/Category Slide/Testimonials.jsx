import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaQuoteLeft } from "react-icons/fa";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((response) => {
      setTestimonials(response.data);
    });
  }, []);

  return (
    <div className="my-5">
      <div className="text-center flex flex-col items-center justify-center mb-5 gap-3">
        <p className="text-xs lg:text-sm text-amber-300 font-Inter">
          ---What Our Clients Say---
        </p>
        <p className="border-t-2 border-b-2 w-2/5 text-center text-xl lg:text-4xl p-2 font-Cinzel font-semibold">
          TESTIMONIALS
        </p>
      </div>
      <div>
        <Swiper
          direction="horizontal"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          className="h-[50vh]"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-base-300 w-full h-full flex flex-col items-center gap-3.5 justify-center">
                <div className="rating rating-xl">
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="2 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name="rating-9"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="5 star"
                  />
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div>
                    <FaQuoteLeft className="text-7xl" />
                  </div>
                  <p className="text-center w-[50%]">
                    {testimonial.details}
                  </p>
                  <p className="uppercase text-lg font-bold text-amber-400">
                    -- {testimonial.name} --
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
