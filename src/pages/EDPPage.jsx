// src/pages/EDPPage.jsx

import React, { memo, useState } from "react";
import { motion } from "framer-motion";

import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";

// ASSETS
import workshop1 from "../assets/EDP1.jpg";
import workshop2 from "../assets/EDP2.jpg";
import workshop3 from "../assets/EDP3.jpg";
import workshop4 from "../assets/EDP4.jpg";
import workshop5 from "../assets/EDP5.JPG";
import workshop6 from "../assets/EDP6.jpg";

/* =========================
   DATA
========================= */

const workshops = [
  {
    title: "सिलाई कार्यशाला",
    description: "Represent By :- Team MYSBA",
    image: workshop1,
    date: "03 Jan 2026",
    time: "10:00 AM To 05:00 PM",
    mode: "Offline Free Course",
  },

  {
    title: "बटन, ढींगरी एवं हिंदी मशरूम की खेती व उत्पादन तकनीक",
    description:
      "Represent By :-गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय, पंतनगर, उत्तराखंड",
    image: workshop2,
    date: "20 Aug 2025",
    time: "09:00 AM To 05:00 AM",
    mode: "Online Fees Rs 1,500.00",
  },

  {
    title: "स्पॉन (बीज) उत्पादन तकनीक",
    description:
      "स्पॉन (बीज) उत्पादन तकनीकRepresent By :-गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय, पंतनगर, उत्तराखंड",
    image: workshop3,
    date: "14 Oct 2025",
    time: "09:00 AM To 05:00 AM",
    mode: "Online Fees Rs 1,500.00",
  },

  {
    title: "औषधीय मशरूम की खेती व व्यवसायिक उत्पादन",
    description:
      "Represent By :-गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय, पंतनगर, उत्तराखंड",
    image: workshop4,
    date: "16 Dec 2025",
    time: "09:00 AM To 05:00 AM",
    mode: "Offline",
  },

  {
    title: "आटा प्लांट कैसे लगाएं ? | How to Start Atta Plant ?",
    description: "Represent By :-RS Choyal",
    image: workshop5,
    date: "06 Aug 2022 ",
    time: "02:00 PM To 04:00 PM",
    mode: "Online Free Course",
  },

  {
    title: "Webinar on Grain Milling & Processing",
    description: "Represent By :-",
    image: workshop6,
    date: "23 Aug 2025",
    time: "12:45 PM To 04:00 PM",
    mode: "Online Fees Rs 1,180.00",
  },
];

//  IMAGE SKELETON

const ImageSkeleton = memo(() => {
  return (
    <div className="w-full h-[240px] bg-gradient-to-r from-[#f4e6d8] via-[#fff5eb] to-[#f4e6d8] animate-pulse" />
  );
});

ImageSkeleton.displayName = "ImageSkeleton";

//  CARD

const WorkshopCard = memo(({ item, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.28,
        delay: index * 0.03,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        bg-white/55
        backdrop-blur-lg
        border
        border-white/40
        shadow-[0_8px_25px_rgba(0,0,0,0.05)]
        hover:shadow-[0_12px_28px_rgba(255,122,0,0.12)]
        transition-all
        duration-200
        ease-out
        transform-gpu
        will-change-transform
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        {!loaded && <ImageSkeleton />}

        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onLoad={() => setLoaded(true)}
          className={`
            w-full
            h-[240px]
            object-cover
            transition-transform
            duration-300
            ease-out
            transform-gpu
            group-hover:scale-[1.02]
            ${loaded ? "opacity-100" : "opacity-0 absolute"}
          `}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

        {/* BADGE */}
        <div className="absolute top-4 left-4">
          <div className="px-4 py-2 rounded-full bg-white/75 backdrop-blur-md border border-white/40 text-[11px] font-semibold text-[#ff7a00] shadow-md">
            {item.mode}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <h3 className="text-[22px] leading-snug font-bold text-[#1b1b1b] line-clamp-2">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="mt-3 text-[15px] leading-relaxed text-[#666] line-clamp-3 min-h-[68px]">
          {item.description}
        </p>

        {/* INFO */}
        <div className="flex flex-wrap gap-4 mt-5 text-sm text-[#666]">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#ff7a00]" />
            <span>{item.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-[#ff7a00]" />
            <span>{item.time}</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="
            group/btn
            w-full
            mt-7
            py-3.5
            rounded-2xl
            bg-[#ff7a00]
            text-white
            font-semibold
            shadow-[0_8px_24px_rgba(255,122,0,0.22)]
            hover:scale-[1.01]
            active:scale-[0.99]
            transition-all
            duration-200
            ease-out
            flex
            items-center
            justify-center
            gap-3
          "
        >
          View Details
          <FaArrowRight className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
});

WorkshopCard.displayName = "WorkshopCard";

//  PAGE

const EDPPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f2ea] overflow-hidden">
      <section className="relative px-5 md:px-8 py-24 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba]" />

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] rounded-full bg-[#ff7a00]/15 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] rounded-full bg-orange-300/15 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* TAG */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/30 shadow-md">
                <div className="w-2 h-2 rounded-full bg-[#ff7a00]" />

                <span className="text-xs md:text-sm tracking-[0.18em] uppercase font-semibold text-[#ff7a00]">
                  EDP
                </span>
              </div>

              {/* TITLE */}
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-[#1b1b1b]">
                Featured{" "}
                <span className="relative inline-block text-[#ff7a00]">
                  Workshops
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-[#ff7a00]/15 rounded-full -z-10" />
                </span>
              </h1>
            </motion.div>

            {/* RIGHT BOX */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="
                max-w-xl
                rounded-[28px]
                bg-white/55
                backdrop-blur-lg
                border
                border-white/40
                shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                p-6
              "
            >
              <p className="text-[16px] md:text-lg leading-relaxed text-[#555]">
                Premium entrepreneurial workshops designed for aspiring
                founders, students and startup enthusiasts.
              </p>
            </motion.div>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {workshops.map((item, index) => (
              <WorkshopCard
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(EDPPage);
