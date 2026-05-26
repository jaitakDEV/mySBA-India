import React from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMAGES
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";

export default function HeroCarousel() {
  const slides = [slide1, slide2, slide3];

  return (
    <section className="relative w-full overflow-hidden mt-0 md:mt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative
                w-full
                h-[220px]
                sm:h-[320px]
                md:h-[500px]
                overflow-hidden
              "
            >
              {/* IMAGE */}
              <img
                src={slide}
                alt={`slide-${index}`}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                  md:object-cover
                  object-center
                  bg-white
                "
              />

              {/* OPTIONAL OVERLAY */}
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
