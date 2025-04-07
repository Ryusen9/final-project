import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      testimonial:
        "Absolutely loved the food and the service! The ambiance made our dinner feel truly special. Will definitely come again!",
    },
    {
      id: 2,
      name: "Michael Smith",
      testimonial:
        "The experience was top-notch. From presentation to flavor, everything was on point. Highly recommend this place!",
    },
    {
      id: 3,
      name: "Sophia Williams",
      testimonial:
        "I've never had such delicious pasta before. The ingredients tasted so fresh. 10/10 from me!",
    },
    {
      id: 4,
      name: "Daniel Thompson",
      testimonial:
        "A hidden gem! Friendly staff, quick service, and mouth-watering dishes. Can’t wait to visit again.",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      testimonial:
        "I came with my family and we all had a wonderful time. The desserts were heavenly. So glad we chose this restaurant!",
    },
    {
      id: 6,
      name: "James Anderson",
      testimonial:
        "Hands down the best dining experience I've had this year. Everything was perfect from start to finish.",
    },
  ];

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
                        <FaQuoteLeft className="text-7xl"/>
                    </div>
                    <p className="text-center w-[50%]">{testimonial.testimonial}</p>
                    <p className="uppercase text-lg font-bold text-amber-400">-- {testimonial.name} --</p>
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
