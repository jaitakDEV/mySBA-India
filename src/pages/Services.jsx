// src/pages/ServicesPage.jsx

import React, { memo, useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaBalanceScale,
  FaIndustry,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

/* =========================
   ROTATING WORDS
========================= */

const rotatingWords = [
  "Entrepreneurs",
  "Startups",
  "Innovators",
  "Founders",
  "Creators",
];

/* =========================
   SERVICES DATA
========================= */

const services = [
  {
    title: "Incubation",
    description:
      "Startup incubation support with mentorship and entrepreneurial guidance.",
    icon: FaBriefcase,
    gradient: "from-orange-500 to-amber-400",
    bg: "bg-orange-100",
  },

  {
    title: "Mentoring",
    description:
      "Professional mentoring programs for startups, students and entrepreneurs.",
    icon: FaUsers,
    gradient: "from-pink-500 to-rose-400",
    bg: "bg-rose-100",
  },

  {
    title: "Project Consultancy",
    description:
      "Complete consultancy support for projects, startups and business planning.",
    icon: FaChartLine,
    gradient: "from-sky-500 to-cyan-400",
    bg: "bg-sky-100",
  },

  {
    title: "Legal Service",
    description:
      "GST, company registration, legal compliance and startup documentation.",
    icon: FaBalanceScale,
    gradient: "from-violet-500 to-purple-400",
    bg: "bg-violet-100",
  },

  {
    title: "Industrial Solutions",
    description:
      "Industrial guidance, operational support and business solutions.",
    icon: FaIndustry,
    gradient: "from-emerald-500 to-green-400",
    bg: "bg-emerald-100",
  },

  {
    title: "Vendor Support",
    description:
      "Vendor networking, sourcing and support services for businesses.",
    icon: FaFileAlt,
    gradient: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-100",
  },
];

/* =========================
   CARD
========================= */

const ServiceCard = memo(({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.28,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        bg-white/60
        backdrop-blur-xl
        border
        border-white/40
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        hover:shadow-[0_15px_35px_rgba(255,122,0,0.10)]
        transition-all
        duration-200
        ease-out
        transform-gpu
      "
    >
      {/* TOP GLOW */}
      <div
        className={`
          absolute
          top-[-40px]
          right-[-40px]
          w-[140px]
          h-[140px]
          rounded-full
          bg-gradient-to-br
          ${item.gradient}
          opacity-10
          blur-3xl
        `}
      />

      {/* CONTENT */}
      <div className="relative z-10 p-8">
        {/* ICON */}
        <div
          className={`
            w-[82px]
            h-[82px]
            rounded-[28px]
            ${item.bg}
            flex
            items-center
            justify-center
            shadow-md
          `}
        >
          <div
            className={`
              w-[62px]
              h-[62px]
              rounded-[22px]
              bg-gradient-to-br
              ${item.gradient}
              flex
              items-center
              justify-center
              shadow-lg
            `}
          >
            <Icon className="text-white text-[26px]" />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="mt-7 text-[28px] leading-tight font-bold text-[#1b1b1b]">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="mt-4 text-[15px] leading-relaxed text-[#666] min-h-[72px]">
          {item.description}
        </p>

        {/* BUTTON */}
        <button
          className="
            group/btn
            mt-7
            inline-flex
            items-center
            gap-3
            text-[#ff7a00]
            font-semibold
            text-[15px]
          "
        >
          Read More
          <FaArrowRight className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* BORDER */}
      <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none" />
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

/* =========================
   PAGE
========================= */

const ServicesPage = () => {
  const [activeWord, setActiveWord] = useState(0);

  /* WORD ROTATION */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f2ea] overflow-hidden">
      <section className="relative px-5 md:px-8 py-24 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba]" />

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] rounded-full bg-[#ff7a00]/15 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] rounded-full bg-orange-300/15 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* TOP */}
          <div className="max-w-5xl">
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                bg-white/60
                backdrop-blur-md
                border
                border-white/40
                shadow-md
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#ff7a00]" />

              <span className="text-xs md:text-sm tracking-[0.18em] uppercase font-semibold text-[#ff7a00]">
                Services
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="
                mt-6
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                text-[#1b1b1b]
              "
            >
              Services For
              <br />
              {/* ROTATING WORD */}
              <span className="relative inline-flex h-[1.2em] min-w-[260px] md:min-w-[420px] overflow-hidden">
                {rotatingWords.map((word, index) => (
                  <span
                    key={word}
                    className={`
                      absolute
                      left-0
                      top-0
                      text-[#ff7a00]
                      transition-all
                      duration-500
                      ease-out
                      ${
                        activeWord === index
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }
                    `}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </motion.h1>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="
                mt-5
                text-[17px]
                leading-relaxed
                text-[#555]
                max-w-4xl
              "
            >
              At MySBA, we are dedicated to helping entrepreneurs and small
              business owners succeed through mentoring, incubation, industrial
              solutions, legal services and consultancy support.
            </motion.p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {services.map((item, index) => (
              <ServiceCard
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

export default memo(ServicesPage);
