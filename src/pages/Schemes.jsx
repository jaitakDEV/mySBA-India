import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Player } from "@lottiefiles/react-lottie-player";

import {
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const schemes = [
  {
    title: "Environment & Energy",
    icon: FaRocket,
    desc: "Support for sustainable projects, renewable energy initiatives, and eco-friendly micro-enterprises.",
    tag: "Sustainability",
  },
  {
    title: "Digital & Technology",
    icon: FaChartLine,
    desc: "Funding and support for digital startups, IT services, and technology-driven innovation.",
    tag: "Digital Growth",
  },
  {
    title: "Finance, Insurance & Pension",
    icon: FaBriefcase,
    desc: "Financial security schemes including insurance, pension plans, and credit support for individuals and businesses.",
    tag: "Financial Security",
  },
  {
    title: "Women, Child & Minority Welfare",
    icon: FaHandshake,
    desc: "Special schemes promoting empowerment, entrepreneurship, and welfare of women, children, and minority communities.",
    tag: "Social Welfare",
  },
  {
    title: "Infrastructure & Industry",
    icon: FaShieldAlt,
    desc: "Support for industrial development, MSMEs, and infrastructure growth through financial and policy assistance.",
    tag: "Industrial Growth",
  },
  {
    title: "Employment & Jobs",
    icon: FaUsers,
    desc: "Skill development, training programs, and job creation initiatives for youth and workforce development.",
    tag: "Skill Development",
  },
];

export default function Schemes() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".scheme-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#f8f2ea] text-[#222]">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-0 h-[220px] w-[220px] rounded-full bg-[#ff7a00]/10 blur-3xl md:h-[320px] md:w-[320px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[220px] w-[220px] rounded-full bg-orange-200/20 blur-3xl md:h-[320px] md:w-[320px]" />

      {/* HERO */}
      <section className="relative px-4 pb-16 pt-14 sm:px-6 md:px-10 md:pb-24 md:pt-20 xl:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg border border-white/40">
              {/* GLOW DOT */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-[#ff7a00]/40 animate-ping"></span>
                <span className="relative w-3 h-3 rounded-full bg-[#ff7a00] shadow-[0_0_15px_#ff7a00]"></span>
              </div>

              <p className="text-sm font-semibold tracking-wide text-[#444] uppercase">
                SCHEMES
              </p>
            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-3xl font-black leading-tight text-[#1b1b1b] sm:text-4xl md:text-5xl xl:text-6xl">
              Business
              <span className="bg-gradient-to-r from-[#ff7a00] to-orange-400 bg-clip-text text-transparent">
                {" "}
                Growth
              </span>{" "}
              Opportunities
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#555] sm:text-[15px] sm:leading-8">
              Discover startup, MSME and entrepreneurship schemes designed for
              funding, mentorship, innovation and business growth.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="group flex items-center gap-2 rounded-2xl bg-[#ff7a00] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(255,122,0,0.35)] transition-all duration-300 hover:scale-[1.03] sm:px-7">
                Explore Schemes
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="rounded-2xl border border-white/50 bg-white/60 px-5 py-3 text-sm font-semibold text-[#222] backdrop-blur-xl sm:px-7">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 flex justify-center lg:order-2"
          >
            <div className="absolute h-[250px] w-[250px] rounded-full bg-[#ff7a00]/10 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]" />

            <div className="relative rounded-[30px] border border-white/50 bg-white/50 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-6 md:rounded-[40px]">
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_3rqwsqnj.json"
                className="h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative px-4 pb-14 sm:px-6 md:px-10 md:pb-20 xl:px-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Startup Support",
              desc: "Optimized startup opportunities.",
              src: "https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json",
            },
            {
              title: "Funding Access",
              desc: "Financial assistance support.",
              src: "https://assets1.lottiefiles.com/packages/lf20_qp1q7mct.json",
            },
            {
              title: "Secure Schemes",
              desc: "Reliable MSME programs.",
              src: "https://assets4.lottiefiles.com/packages/lf20_jcikwtux.json",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[24px] border border-white/50 bg-white/60 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-5"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#ff7a00]/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff5eb] sm:h-16 sm:w-16">
                  <Player
                    autoplay
                    loop
                    src={item.src}
                    className="h-10 w-10 sm:h-12 sm:w-12"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#1b1b1b] sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-[#666] sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEME CARDS */}
      <section
        ref={sectionRef}
        className="relative px-4 pb-20 sm:px-6 md:px-10 md:pb-28 xl:px-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {schemes.map((scheme, index) => {
            const Icon = scheme.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="scheme-card group relative overflow-hidden rounded-[26px] border border-white/50 bg-white/60 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-6"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ff7a00]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7a00] to-orange-400 text-lg text-white shadow-[0_10px_25px_rgba(255,122,0,0.35)] sm:h-14 sm:w-14 sm:text-xl">
                    <Icon />
                  </div>

                  <span className="rounded-full bg-[#fff5eb] px-3 py-1 text-[10px] font-semibold text-[#ff7a00] sm:text-xs">
                    {scheme.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#1b1b1b] sm:text-2xl">
                  {scheme.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#666]">
                  {scheme.desc}
                </p>

                <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#ff7a00] transition-all duration-300 group-hover:gap-3">
                  View Details
                  <FaArrowRight />
                </button>

                <div className="absolute inset-0 rounded-[26px] border border-transparent bg-gradient-to-br from-white/5 to-[#ff7a00]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-20 sm:px-6 md:px-10 md:pb-32 xl:px-16">
        <div className="mx-auto overflow-hidden rounded-[28px] border border-white/50 bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:p-8 md:rounded-[40px] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-black leading-tight text-[#1b1b1b] sm:text-3xl md:text-4xl xl:text-5xl">
                Need Help Choosing the Right Scheme?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#555] sm:text-[15px] sm:leading-8">
                Connect with our experts and discover startup, MSME and
                government support opportunities for your business growth.
              </p>

              <button className="group mt-7 flex items-center gap-3 rounded-2xl bg-[#ff7a00] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(255,122,0,0.35)] transition-all duration-300 hover:scale-[1.03] sm:px-7 sm:py-4">
                Contact Us
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <div className="relative rounded-[28px] border border-white/50 bg-white/40 p-4 backdrop-blur-2xl sm:p-6 md:rounded-[32px]">
                <Player
                  autoplay
                  loop
                  src="https://assets9.lottiefiles.com/packages/lf20_puciaact.json"
                  className="h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
