import React, { memo } from "react";
import { motion } from "framer-motion";

import { FaUserEdit, FaBookOpen, FaAward, FaArrowRight } from "react-icons/fa";

const steps = [
  {
    title: "Register",
    description:
      "Register yourself for the EDP programme and begin your entrepreneurial learning journey.",
    icon: FaUserEdit,
    gradient: "from-orange-500 to-amber-500",
  },

  {
    title: "Learn",
    description:
      "Acquire practical business skills, industry exposure and entrepreneurial capabilities.",
    icon: FaBookOpen,
    gradient: "from-sky-500 to-cyan-500",
  },

  {
    title: "Get Certified",
    description:
      "Receive certification to strengthen your professional profile and career opportunities.",
    icon: FaAward,
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

const EDPJourney = () => {
  return (
    <div className="min-h-screen bg-[#f8f2ea] py-10 px-4 overflow-hidden">
      <section className="relative min-h-screen overflow-hidden rounded-[40px]">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba]" />

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-140px] left-[-140px] w-[340px] h-[340px] rounded-full bg-[#ff7a00]/10 blur-3xl" />

        <div className="absolute bottom-[-140px] right-[-140px] w-[340px] h-[340px] rounded-full bg-orange-300/15 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
          {/* TOP */}
          {/* TOP */}
          <div className="max-w-3xl pt-10 md:pt-16">
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
                Entrepreneurship Programme
              </p>
            </motion.div>

            {/* HEADING */}
            <h1 className="mt-7 text-4xl md:text-6xl font-bold leading-[1.05] text-[#1b1b1b]">
              Build Skills For
              <br />
              Business & Growth
            </h1>
          </div>

          {/* HORIZONTAL FLOW */}
          <div className="relative mt-20 lg:mt-24">
            {/* CENTER LINE */}
            <div className="hidden lg:block absolute top-[58px] left-0 right-0 h-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" />

            {/* ITEMS */}
            <div className="grid lg:grid-cols-3 gap-14 lg:gap-10 relative z-10">
              {steps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                      text-center
                    "
                  >
                    {/* ICON */}
                    <div className="relative flex items-center justify-center w-[120px] h-[120px]">
                      {/* PULSE */}
                      <span className="absolute inset-0 rounded-full border border-[#ff8a1d]/70 animate-ping" />

                      {/* MAIN CIRCLE */}
                      <div
                        className={`
                          relative
                          w-[105px]
                          h-[105px]
                          rounded-full
                          bg-gradient-to-br
                          ${item.gradient}
                          flex
                          items-center
                          justify-center
                          shadow-[0_15px_35px_rgba(255,122,0,0.22)]
                        `}
                      >
                        {/* INNER BORDER */}
                        <div className="absolute inset-[3px] rounded-full border border-white/30" />

                        {/* ICON */}
                        <Icon className="text-white text-[36px] relative z-10" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h2 className="mt-8 text-[28px] font-bold text-[#1b1b1b]">
                      {item.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-5 max-w-[320px] text-[15px] leading-[1.9] text-[#666]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-16 lg:mt-20 flex justify-center pb-4">
            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                px-12
                py-4
                rounded-full
                bg-[#ff982e]
                hover:bg-[#f28b1e]
                text-white
                font-semibold
                text-[17px]
                shadow-[0_12px_35px_rgba(255,122,0,0.22)]
                transition-all
                duration-200
              "
            >
              Enroll Now
              <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(EDPJourney);
