import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Don’t forget this!

const Hero = () => {
  const images = [
    "/assets/home/01.jpg",
    "/assets/home/02.jpg",
    "/assets/home/03.png",
    "/assets/home/04.jpg",
    "/assets/home/05.png",
    "/assets/home/06.png",
  ];

  return (
    <section className="h-screen overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={800}
        swipeable
        emulateTouch
        className="h-full"
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
