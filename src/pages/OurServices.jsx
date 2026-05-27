import React, { memo } from "react";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaGraduationCap,
  FaBriefcase,
  FaFileInvoice,
  FaIdCard,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Events",
    description:
      "Professional workshops, awareness programs and activities for students, professionals and entrepreneurs.",
    icon: FaCalendarAlt,
    gradient: "from-orange-500 to-amber-400",
    bg: "bg-orange-100",
  },

  {
    title: "Courses",
    description:
      "Career-focused learning programs designed to build practical business and professional skills.",
    icon: FaGraduationCap,
    gradient: "from-sky-500 to-cyan-400",
    bg: "bg-sky-100",
  },

  {
    title: "Business Services",
    description:
      "Complete entrepreneurial services including consultancy, mentoring and incubation support.",
    icon: FaBriefcase,
    gradient: "from-violet-500 to-purple-400",
    bg: "bg-violet-100",
  },

  {
    title: "Project Reports",
    description:
      "Professional business reports, project documentation and industrial planning solutions.",
    icon: FaFileInvoice,
    gradient: "from-pink-500 to-rose-400",
    bg: "bg-rose-100",
  },

  {
    title: "Membership",
    description:
      "Get access to premium resources, mentorship, workshops and professional opportunities.",
    icon: FaIdCard,
    gradient: "from-emerald-500 to-green-400",
    bg: "bg-emerald-100",
  },

  {
    title: "Government Schemes",
    description:
      "Explore useful government schemes and support programs for employment and entrepreneurship.",
    icon: FaLightbulb,
    gradient: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-100",
  },
];

const ServiceCard = memo(({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        bg-white/80
        backdrop-blur-lg
        border
        border-white/50
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        hover:-translate-y-1.5
        hover:shadow-[0_14px_40px_rgba(255,122,0,0.10)]
        transition-transform
        duration-150
        ease-out
        will-change-transform
      "
    >
      {/* TOP LINE */}
      <div
        className={`
          h-[4px]
          w-full
          bg-gradient-to-r
          ${item.gradient}
        `}
      />

      {/* GLOW */}
      <div
        className={`
          absolute
          top-[-50px]
          right-[-50px]
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
      <div className="relative z-10 p-6">
        {/* ICON */}
        <div
          className={`
            w-[74px]
            h-[74px]
            rounded-[22px]
            ${item.bg}
            flex
            items-center
            justify-center
            shadow-inner
            mx-auto
          `}
        >
          <div
            className={`
              w-[54px]
              h-[54px]
              rounded-[16px]
              bg-gradient-to-br
              ${item.gradient}
              flex
              items-center
              justify-center
              shadow-md
            `}
          >
            <Icon className="text-white text-[22px]" />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="mt-5 text-[22px] font-bold text-[#1b1b1b] text-center leading-tight">
          {item.title}
        </h2>

        {/* SMALL LINE */}
        <div
          className={`
            mt-3
            mx-auto
            h-[3px]
            w-[48px]
            rounded-full
            bg-gradient-to-r
            ${item.gradient}
          `}
        />

        {/* DESC */}
        <p className="mt-5 text-[14px] leading-[1.8] text-[#666] text-center min-h-[72px]">
          {item.description}
        </p>

        {/* BUTTON */}
        <button
          className="
            group/btn
            mt-6
            w-full
            py-3
            rounded-xl
            bg-[#fff7f0]
            hover:bg-[#ff7a00]
            border
            border-[#ffe2c7]
            text-[#ff7a00]
            hover:text-white
            font-semibold
            text-[14px]
            transition-colors
            duration-150
            flex
            items-center
            justify-center
            gap-2
          "
        >
          Explore Service
          <FaArrowRight className="transition-transform duration-150 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-[#f8f2ea] overflow-hidden">
      <section className="relative px-5 md:px-8 py-20 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff8f1] via-[#f7efe5] to-[#f5dcc2]" />

        {/* GLOWS */}
        <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] rounded-full bg-[#ff7a00]/15 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* TOP */}
          <div className="flex flex-col items-start text-left">
            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg border border-white/40"
            >
              {/* GLOW DOT */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-[#ff7a00]/40 animate-ping"></span>

                <span className="relative w-3 h-3 rounded-full bg-[#ff7a00] shadow-[0_0_15px_#ff7a00]"></span>
              </div>

              <p className="text-sm font-semibold tracking-wide text-[#444] uppercase">
                Our Services
              </p>
            </motion.div>

            {/* HEADING */}
            <h1
              className="
                mt-6
                text-3xl
                md:text-5xl
                font-bold
                leading-[1.1]
                text-[#1b1b1b]
                text-left
              "
            >
              Professional Solutions
              <br />
              <span className="text-[#ff7a00]">
                For Learning, Business & Growth
              </span>
            </h1>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-20">
            {services.map((item, index) => (
              <ServiceCard key={`${item.title}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(OurServices);
