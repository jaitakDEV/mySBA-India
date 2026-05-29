import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineMenuAlt3, HiOutlineArrowRight } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const navLinks = ["Home", "Destinations", "Tours", "About", "Contact"];

export default function AboutUs() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const [stickyNav, setStickyNav] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;

    gsap.to(image, {
      y: 120,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: hero,
      start: "bottom top",
      onEnter: () => setStickyNav(true),
      onLeaveBack: () => setStickyNav(false),
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-[#f8f2ea] overflow-hidden">
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          stickyNav
            ? "backdrop-blur-2xl bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
          {/* MOBILE MENU */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden text-3xl text-[#111]"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setDrawerOpen(false)}
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
        ></div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: drawerOpen ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute right-0 top-0 h-full w-[82%] sm:w-[420px] bg-white/80 backdrop-blur-3xl shadow-2xl p-8"
        >
          <div className="flex items-center justify-between mb-14">
            <h2 className="text-2xl font-black text-[#ff7a00]">Menu</h2>

            <button
              onClick={() => setDrawerOpen(false)}
              className="text-4xl leading-none"
            >
              ×
            </button>
          </div>

          <button className="mt-12 w-full bg-[#ff7a00] text-white py-4 rounded-full text-lg font-semibold shadow-xl shadow-orange-200">
            Start Journey
          </button>
        </motion.div>
      </div>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba]"></div>

        {/* GLOW */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-orange-300/40 blur-[120px]"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full bg-yellow-200/50 blur-[120px]"></div>

        {/* CONTENT */}
        <div
          className="
  max-w-7xl
  mx-auto
  px-5
  lg:px-10
  relative
  z-10
  grid
  lg:grid-cols-2
  gap-10
  lg:gap-16
  items-center
  pt-14
  md:pt-16
  lg:pt-20
  pb-6
  md:pb-8
"
        >
          {/* LEFT */}
          <div>
            <div
              className="
    inline-flex items-center gap-3
    bg-white/70 border border-white/40
    backdrop-blur-xl px-5 py-3 rounded-full
    shadow-lg mb-8
  "
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-[#ff7a00]/40 animate-ping"></span>
                <span className="relative w-3 h-3 rounded-full bg-[#ff7a00] shadow-[0_0_15px_#ff7a00]"></span>
              </div>

              <p className="text-sm font-semibold tracking-wide text-[#444] uppercase">
                About Swavalambi Bharat Abhiyaan
              </p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-[42px] sm:text-[58px] lg:text-[88px] leading-[0.95] font-black tracking-[-2px] lg:tracking-[-3px] text-[#1b1b1b]"
            >
              Building
              <span className="block text-[#ff7a00] italic font-semibold">
                Digital
              </span>
              Experiences With MySBA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6 max-w-xl text-[#555] text-base sm:text-lg lg:text-xl leading-relaxed"
            >
              MySBA is a digital platform of Swavalambi Bharat Abhiyan. It aims
              at spreading entrepreneurship awareness among young citizens,
              motivating them to become job creators rather than job seekers and
              making India a self-reliant nation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-[#ff7a00] hover:bg-[#ea6b00] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_15px_40px_rgba(255,122,0,0.35)]">
                Learn More
                <HiOutlineArrowRight className="text-xl group-hover:translate-x-1 transition-all" />
              </button>

              <button className="bg-white/80 backdrop-blur-xl border border-white/50 hover:bg-white text-[#222] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg">
                Contact Us
              </button>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {[
                ["15K+", "Volunteers"],
                ["22k+", "Sahyog Kendera"],
                ["667+", "Service Provider"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl p-4 shadow-xl"
                >
                  <h3 className="text-2xl lg:text-3xl font-black text-[#111]">
                    {item[0]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666] mt-2 leading-relaxed">
                    {item[1]}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* FLOAT CARD */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute top-5 left-0 lg:left-10 z-20 bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl p-5 shadow-2xl max-w-[220px]"
            >
              <p className="text-sm text-[#666] font-medium">
                Start Your Journey With
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#111]">MySBA</h3>

              <p className="mt-2 text-sm text-[#777] leading-relaxed">
                and Become a Partner in India’s Growth
              </p>
            </motion.div>

            {/* IMAGE */}
            <div
              ref={imageRef}
              className="relative w-full max-w-[600px] h-[420px] sm:h-[550px] lg:h-[650px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] border border-white/40"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=60"
                alt="travel"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 right-0 bg-[#111] text-white px-6 py-4 rounded-3xl shadow-2xl"
            >
              <p className="text-sm text-gray-300">Begin With MySBA</p>

              <h3 className="text-2xl lg:text-3xl font-black mt-1">Success</h3>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
