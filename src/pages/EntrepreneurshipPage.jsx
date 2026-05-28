import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../assets/EntSlider1.webp";
import slide2 from "../assets/EntSlider2.webp";
import slide3 from "../assets/EntSlider3.webp";

import deasraLogo from "../assets/deAsralogo-1.svg";
import teamleaseLogo from "../assets/teamlease-logo.webp";

const companies = [
  "DeAsra",
  "TeamLease Services Limited",
  "DeAsra",
  "TeamLease Services Limited",
  "DeAsra",
  "TeamLease Services Limited",
];

const startupCompanies = [
  {
    name: "DeAsra",
    logo: deasraLogo,
    website: "https://www.deasra.in/",
    description:
      "Helping entrepreneurs and small businesses grow through mentoring, resources and startup ecosystem support.",
  },
  {
    name: "TeamLease Services Limited",
    logo: teamleaseLogo,
    website: "https://group.teamlease.com/",
    description:
      "India’s leading staffing and employability solutions company empowering workforce and entrepreneurship growth.",
  },
];

export default function EnterpreneurshipPage() {
  const slides = [slide1, slide2, slide3];

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* HERO CAROUSEL */}
      <section className="relative mt-0 w-full overflow-hidden md:mt-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  relative
                  w-full
                  aspect-[16/8]
                  sm:aspect-[16/7]
                  lg:aspect-[16/6]
                  overflow-hidden
                  bg-white
                "
              >
                {/* Loader */}
                {!loaded && (
                  <div className="absolute inset-0 z-10 animate-pulse bg-gray-200" />
                )}

                {/* Image */}
                <img
                  src={slide}
                  alt={`slide-${index}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => setLoaded(true)}
                  className={`
                    absolute inset-0
                    h-full w-full
                    object-contain
                    bg-white
                    object-center
                    transition-opacity duration-700
                    ${loaded ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FOOTER / MARQUEE */}
      <div className="overflow-hidden border-t border-gray-200 bg-[#f7faf8] py-6">
        <div className="flex w-max animate-marquee">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="px-10 text-sm font-semibold tracking-wide text-gray-500"
            >
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* STARTUP COMPANY CARDS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5eb] via-[#f8f2ea] to-[#f7efe5] px-6 py-24">
        {/* Background Glow */}
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#ff7a00]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-200/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-16 text-center">
            <span
              className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#ff7a00]/20
          bg-white/70
          px-5
          py-2
          text-xs
          font-bold
          uppercase
          tracking-[4px]
          text-[#ff7a00]
          shadow-sm
          backdrop-blur-xl
        "
            >
              Entrepreneurship
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#1b1b1b] md:text-6xl">
              Leading startups
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#555]">
              Collaborating with top entrepreneurship and workforce
              organizations to build innovation ecosystems and startup
              opportunities.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 lg:grid-cols-2">
            {startupCompanies.map((company, index) => (
              <div
                key={index}
                className="
            group
            relative
            overflow-hidden
            rounded-[38px]
            border
            border-white/50
            bg-white/65
            p-8
            backdrop-blur-2xl
            shadow-[0_15px_60px_rgba(0,0,0,0.06)]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-[0_30px_90px_rgba(255,122,0,0.20)]
          "
              >
                {/* Glow Layer */}
                <div
                  className="
              absolute
              right-[-80px]
              top-[-80px]
              h-64
              w-64
              rounded-full
              bg-[#ff7a00]/10
              blur-3xl
              transition-all
              duration-700
              group-hover:scale-125
            "
                />

                {/* Top Section */}
                <div className="relative flex items-start justify-between gap-6">
                  {/* Logo Container */}
                  <div
                    className="
                flex
                h-28
                w-28
                shrink-0
                items-center
                justify-center
                rounded-[30px]
                border
                border-white/70
                bg-gradient-to-br
                from-white
                to-[#fff5eb]
                shadow-[inset_4px_4px_12px_rgba(255,255,255,0.9),_10px_10px_30px_rgba(0,0,0,0.05)]
              "
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-10">
                  <h3 className="text-3xl font-black tracking-tight text-[#1b1b1b]">
                    {company.name}
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-[#555]">
                    {company.description}
                  </p>
                </div>

                {/* Bottom Area */}
                <div className="relative mt-10 flex items-center justify-between">
                  {/* CTA */}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                group/button
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-[#ff7a00]
                px-7
                py-4
                text-sm
                font-bold
                tracking-wide
                text-white
                shadow-[0_10px_35px_rgba(255,122,0,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#eb7000]
              "
                  >
                    <span>Visit Website</span>

                    {/* Premium Icon */}
                    <span
                      className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover/button:rotate-45
                  group-hover/button:bg-white/30
                "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H8M17 7V16"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Bottom Highlight */}
                <div
                  className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-gradient-to-r
              from-[#ff7a00]
              to-orange-300
              transition-all
              duration-500
              group-hover:w-full
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* Swiper Navigation */
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          transform: scale(0.7);
        }

        /* Swiper Pagination */
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
