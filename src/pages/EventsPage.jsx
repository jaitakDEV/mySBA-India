import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  FiCalendar,
  FiUsers,
  FiArrowRight,
  FiMapPin,
  FiClock,
  FiZap,
} from "react-icons/fi";

import { FaPlay, FaArrowRight } from "react-icons/fa";

const eventCategories = [
  {
    title: "EDP Programs",
    subtitle: "Entrepreneurship Development Sessions",
    icon: "✦",
  },
  {
    title: "Webinars",
    subtitle: "Interactive Digital Learning Events",
    icon: "◉",
  },
  {
    title: "Seminars",
    subtitle: "Knowledge & Awareness Sessions",
    icon: "◆",
  },
  {
    title: "Trade Shows",
    subtitle: "Startup Networking & Business Exposure",
    icon: "⬢",
  },
];

const stats = [
  { number: "50+", label: "Events" },
  { number: "10K+", label: "Participants" },
  { number: "100%", label: "Learning" },
];

const events = [
  {
    title: "Startup Ecosystem Workshop",
    type: "Workshop",
    date: "15 June 2026",
    time: "11:00 AM",
    location: "Jaipur",
    description:
      "Helping entrepreneurs understand startup ecosystems, innovation strategies and growth opportunities.",
  },
  {
    title: "Entrepreneurship Awareness Seminar",
    type: "Seminar",
    date: "22 June 2026",
    time: "01:00 PM",
    location: "Online",
    description:
      "Awareness-based entrepreneurial session focused on business fundamentals and startup thinking.",
  },
  {
    title: "Business Plan Contest",
    type: "Competition",
    date: "04 July 2026",
    time: "10:30 AM",
    location: "Delhi",
    description:
      "Present innovative startup ideas and receive expert mentoring, feedback and networking exposure.",
  },
  {
    title: "Digital Startup Webinar",
    type: "Webinar",
    date: "10 July 2026",
    time: "07:00 PM",
    location: "Online",
    description:
      "Interactive digital webinar for students and founders exploring modern startup trends.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function EventsPage() {
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;

    gsap.fromTo(
      hero,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );

    gsap.to(glow, {
      y: 30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#f8f2ea] text-[#222]">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff5eb_0%,#f7efe5_45%,#f5d8ba_100%)] opacity-90" />

      <div
        ref={glowRef}
        className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-[#ff7a00]/20 blur-[120px]"
      />

      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[120px]" />

      <div className="relative z-10">
        {/* ================= HERO ================= */}

        <section
          ref={heroRef}
          className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-12"
        >
          <div className="grid items-center gap-14 lg:grid-cols-2">
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
                  Startup Events & Entrepreneurial Sessions
                </p>
              </div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="max-w-2xl text-5xl font-black leading-[1.1] tracking-tight text-[#1b1b1b] md:text-7xl"
              >
                Transforming
                <span className="block bg-gradient-to-r from-[#ff7a00] to-orange-400 bg-clip-text text-transparent">
                  Ideas Into
                </span>
                Opportunities
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-8 max-w-xl text-lg leading-relaxed text-[#555]"
              >
                Events, business plan contests, startup mentoring,
                entrepreneurial talks, awareness seminars and interactive
                learning experiences designed to empower future entrepreneurs.
              </motion.p>

              {/* BUTTONS */}

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-10 flex flex-wrap gap-4"
              >
                <button className="group flex items-center gap-2 rounded-2xl bg-[#ff7a00] px-7 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(255,122,0,0.35)] transition-all duration-300 hover:-translate-y-1">
                  Explore Events
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button className="rounded-2xl border border-white/40 bg-white/60 px-7 py-4 font-semibold text-[#222] backdrop-blur-xl transition-all duration-300 hover:bg-white">
                  Learn More
                </button>
              </motion.div>

              {/* STATS */}

              <div className="mt-16 grid grid-cols-3 gap-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="rounded-3xl border border-white/40 bg-white/50 p-5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                  >
                    <h3 className="text-3xl font-black text-[#ff7a00]">
                      {item.number}
                    </h3>

                    <p className="mt-1 text-sm text-[#666]">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <motion.div
                initial={{
                  opacity: 0,
                  rotate: 3,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/50 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-orange-100/20" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#777]">Our Events</p>

                      <h2 className="mt-1 text-2xl font-bold text-[#1b1b1b]">
                        Startup Ecosystem
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff7a00] text-white shadow-lg">
                      <FiCalendar size={24} />
                    </div>
                  </div>

                  {/* CARDS */}

                  <div className="space-y-4">
                    {eventCategories.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -3,
                        }}
                        onMouseEnter={() => setActiveCard(index)}
                        className={`group cursor-pointer rounded-3xl border p-5 transition-all duration-300 ${
                          activeCard === index
                            ? "border-[#ff7a00]/40 bg-white shadow-[0_10px_35px_rgba(255,122,0,0.15)]"
                            : "border-white/40 bg-white/40"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7a00] to-orange-400 text-xl text-white shadow-lg">
                            {item.icon}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-bold text-[#1b1b1b]">
                                {item.title}
                              </h3>

                              <FiArrowRight className="text-[#ff7a00] transition-transform duration-300 group-hover:translate-x-1" />
                            </div>

                            <p className="mt-2 text-sm leading-relaxed text-[#666]">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= EVENTS ================= */}

        <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-12">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7a00]">
                Featured Events
              </p>

              <h2 className="max-w-2xl text-4xl font-black leading-tight text-[#1b1b1b] md:text-5xl">
                Inspiring Entrepreneurial Experiences
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-[#666]">
              Optimized and modern event experiences designed with clean
              interactions, startup-focused engagement and professional learning
              opportunities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[36px] border border-white/40 bg-white/60 p-7 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ff7a00]/10 blur-[70px]" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex rounded-full bg-[#ff7a00]/10 px-4 py-2 text-sm font-semibold text-[#ff7a00]">
                    {event.type}
                  </div>

                  <h3 className="text-2xl font-bold leading-snug text-[#1b1b1b] transition-colors duration-300 group-hover:text-[#ff7a00]">
                    {event.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm text-[#666]">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-[#ff7a00]" />
                      {event.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <FiClock className="text-[#ff7a00]" />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-[#ff7a00]" />
                      {event.location}
                    </div>
                  </div>

                  <p className="mt-6 leading-relaxed text-[#555]">
                    {event.description}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#ff7a00]">
                    View Details
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= VIDEO EXPERIENCE ================= */}

        <section className="px-6 pb-28 lg:px-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[40px] border border-white/30 shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
          >
            {/* VIDEO */}

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="h-[520px] w-full object-cover md:h-[650px]"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-dancing-in-the-crowd-1564841140868?download=1080p"
                type="video/mp4"
              />
            </video>

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

            {/* GLOW */}

            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff7a00]/20 blur-[120px]" />

            {/* CINEMATIC MARQUEE */}

            <div className="absolute top-16 overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 45,
                  ease: "linear",
                }}
                className="flex text-[90px] font-black uppercase tracking-[0.18em] text-white/[0.07] md:text-[170px]"
              >
                <span className="mr-14">
                  EVENTS • STARTUPS • NETWORKING • ENTREPRENEURS • EXPERIENCES •
                  WORKSHOPS • SEMINARS •
                </span>

                <span>
                  EVENTS • STARTUPS • NETWORKING • ENTREPRENEURS • EXPERIENCES •
                  WORKSHOPS • SEMINARS •
                </span>
              </motion.div>
            </div>

            {/* CONTENT */}

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
              {/* GLASS BADGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                viewport={{
                  once: true,
                }}
                className="mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl"
              >
                <span className="text-sm font-medium tracking-[0.12em] text-white/90 uppercase">
                  Experience Entrepreneurial Energy
                </span>
              </motion.div>

              {/* TITLE */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{
                  once: true,
                }}
                className="max-w-5xl text-5xl font-black leading-none text-white md:text-8xl"
              >
                FEEL
                <span className="block bg-gradient-to-r from-[#ff7a00] via-orange-300 to-[#ffd3a8] bg-clip-text text-transparent">
                  THE EXPERIENCE
                </span>
              </motion.h2>

              {/* SUBTEXT */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
              >
                High-energy startup events, entrepreneurial networking,
                workshops, seminars and immersive learning experiences designed
                for future founders and innovators.
              </motion.p>

              {/* PLAY BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group relative mt-12 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-[#ff7a00] text-white backdrop-blur-xl shadow-[0_10px_40px_rgba(255,122,0,0.35)] transition-all duration-300"
              >
                {/* Pulse Ring */}

                <span className="absolute inset-0 rounded-full border border-[#ffb36b]/50 animate-ping" />

                <FaPlay
                  size={22}
                  className="relative z-10 ml-1 transition-transform duration-300 group-hover:scale-110"
                />
              </motion.button>
            </div>

            {/* BOTTOM FADE */}

            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f8f2ea] to-transparent" />
          </motion.div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="px-6 lg:px-16 pb-24">
          <div className="relative overflow-hidden rounded-[50px] bg-[#1b1b1b] p-10 md:p-20">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff7a00]/10 blur-[120px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div>
                <p className="uppercase tracking-[5px] text-[#ff7a00] font-bold">
                  Join The Movement
                </p>

                <h2 className="mt-5 text-5xl md:text-7xl text-white font-black leading-[0.95]">
                  EXPERIENCE
                  <span className="block text-[#ff7a00]">SOMETHING EPIC</span>
                </h2>
              </div>

              <button className="group relative overflow-hidden px-10 py-6 rounded-full bg-[#ff7a00] text-white text-lg font-bold shadow-[0_10px_40px_rgba(255,122,0,0.35)]">
                <span className="relative z-10 flex items-center gap-3">
                  Book Tickets
                  <FaArrowRight />
                </span>

                <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition duration-500" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
