import React, { useEffect, useState, memo, useMemo, useRef } from "react";

import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useNavigate } from "react-router-dom";

import {
  FaRocket,
  FaArrowRight,
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaUserTie,
  FaBuilding,
  FaHandshake,
  FaPlay,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// MEMOIZED CARD COMPONENT

const ServiceCard = memo(({ card, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      style={{ willChange: "transform" }}
      className="
      reveal-up
      relative overflow-hidden group rounded-[32px]
      border border-white/40 bg-white/60 backdrop-blur-xl
      p-8 shadow-lg transform-gpu will-change-transform
      "
    >
      <div
        className="
        absolute inset-0
        bg-gradient-to-br
        from-[#ff7a00]/10 to-transparent
        opacity-0 group-hover:opacity-100
        transition duration-300
      "
      />

      <div className="relative z-10">
        <div
          className="
          w-20 h-20 rounded-3xl
          bg-gradient-to-br
          from-[#ff7a00] to-orange-400
          text-white flex items-center
          justify-center text-3xl shadow-lg
        "
        >
          {card.icon}
        </div>

        <h3 className="mt-8 text-3xl font-bold">{card.title}</h3>

        <p className="mt-5 text-[#666] leading-relaxed">{card.desc}</p>

        <button
          onClick={onClick}
          className="
          mt-8 flex items-center
          gap-3 text-[#ff7a00]
          font-semibold
        "
        >
          {card.button}
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
});

// MAIN COMPONENT

const StartupPage = () => {
  const navigate = useNavigate();

  const sectionRef = useRef(null);

  const [index, setIndex] = useState(0);

  // WORDS MEMO
  const words = useMemo(
    () => [
      "Future Startup",
      "Next Unicorn",
      "AI Revolution",
      "Digital solution",
      "Global Brand",
      "Tech Ecosystem",
    ],
    [],
  );

  // WORD ROTATION
  useEffect(() => {
    let mounted = true;

    const interval = setInterval(() => {
      if (mounted) {
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, 2500);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [words.length]);

  // GSAP ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-up",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          force3D: true,
          clearProps: "all",

          scrollTrigger: {
            trigger: ".scroll-section",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.to(".floating-orb", {
        y: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true,
      });
    }, sectionRef);

    return () => {
      ctx.revert();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // CARDS MEMO
  const cards = useMemo(
    () => [
      {
        title: "About Startup",
        desc: "An elite ecosystem helping founders transform visionary ideas into scalable ventures.",
        icon: <FaLightbulb />,
        button: "Explore More",
      },

      {
        title: "Register Startup",
        desc: "Submit your startup and unlock investors, mentors, partnerships & incubation access.",
        icon: <FaRocket />,
        button: "Register Now",
      },

      {
        title: "Success Stories",
        desc: "Discover founders who scaled globally with mentorship, funding and growth support.",
        icon: <FaChartLine />,
        button: "View Stories",
      },
    ],
    [],
  );

  // ECOSYSTEM MEMO
  const ecosystem = useMemo(
    () => [
      {
        title: "Mentor",
        desc: "Connect with industry experts, founders & advisors.",
        icon: <FaUserTie />,
      },

      {
        title: "Incubator",
        desc: "Accelerate your startup with strategic infrastructure.",
        icon: <FaBuilding />,
      },

      {
        title: "Startup",
        desc: "Launch and scale innovative business ideas globally.",
        icon: <FaHandshake />,
      },
    ],
    [],
  );

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={sectionRef}
        className="
        relative overflow-hidden
        bg-[#f8f2ea] text-[#1b1b1b]
      "
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* BACKGROUND ORBS*/}

        <div
          className="
          floating-orb
          absolute top-20 left-10
          w-72 h-72
          bg-[#ff7a00]/20
          blur-[80px]
          rounded-full
          transform-gpu
          will-change-transform
        "
        />

        <div
          className="
          absolute bottom-0 right-0
          w-[320px] h-[320px]
          bg-orange-200/20
          blur-[90px]
          rounded-full
          transform-gpu
          will-change-transform
        "
        />

        {/* HERO SECTION*/}

        <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/*LEFT SIDE*/}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="transform-gpu will-change-transform"
            >
              {/* TOP BADGE */}

              <div
                className="
                inline-flex items-center gap-3
                bg-white/70 border border-white/40
                backdrop-blur-xl px-5 py-3 rounded-full
                shadow-lg mb-8
              "
              >
                <div className="relative flex items-center justify-center">
                  <span
                    className="
                    absolute w-5 h-5 rounded-full
                    bg-[#ff7a00]/40 animate-ping
                  "
                  />

                  <span
                    className="
                    relative w-3 h-3 rounded-full
                    bg-[#ff7a00]
                    shadow-[0_0_15px_#ff7a00]
                  "
                  />
                </div>

                <p
                  className="
                  text-sm font-semibold tracking-wide
                  text-[#444] uppercase
                "
                >
                  Our Startup Ecosystem
                </p>
              </div>

              {/* HEADING */}

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Build the
                {/* ROTATING WORDS */}
                <div
                  className="
                  relative h-[90px]
                  overflow-hidden mt-2
                  will-change-transform
                "
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={words[index]}
                      initial={{
                        y: 40,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -40,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                      className="absolute left-0 top-0"
                    >
                      <span
                        className="
                        text-transparent bg-clip-text
                        bg-gradient-to-r
                        from-[#ff7a00]
                        via-orange-400
                        to-yellow-400
                      "
                      >
                        {words[index]}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="block">With Innovation</span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                mt-8 text-lg text-[#555]
                leading-relaxed max-w-2xl
              "
              >
                Join the MySBA Startup Network and take your venture to the next
                level. Get access to visibility, mentorship, networking, and
                growth opportunities designed for early-stage startups. Register
                today by filling out the “Join as Startup” form and become part
                of a thriving entrepreneurial ecosystem.
              </p>

              {/* BUTTONS */}

              <div className="mt-10 flex flex-wrap gap-5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  style={{ willChange: "transform" }}
                  className="
                  group relative overflow-hidden
                  px-8 py-4 rounded-2xl
                  bg-[#ff7a00]
                  text-white font-semibold
                  shadow-lg transform-gpu
                  will-change-transform
                "
                  onClick={() => navigate("/startup/directory")}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Launch Startup
                    <FaArrowRight />
                  </span>

                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-orange-500 to-orange-300
                    translate-y-full
                    group-hover:translate-y-0
                    transition duration-300
                  "
                  />
                </motion.button>

                <button
                  className="
                  flex items-center gap-3
                  px-8 py-4 rounded-2xl
                  bg-white/70 backdrop-blur-xl
                  border border-white/50 shadow-lg
                "
                >
                  <FaPlay className="text-[#ff7a00]" />
                  Watch Intro
                </button>
              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-5 mt-16">
                {[
                  ["500+", "Startups"],
                  ["120+", "Mentors"],
                  ["50+", "Incubators"],
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                    bg-white/60 backdrop-blur-xl
                    border border-white/40
                    rounded-3xl p-5 shadow-lg
                  "
                  >
                    <h2 className="text-3xl font-black text-[#ff7a00]">
                      {item[0]}
                    </h2>

                    <p className="text-[#666] mt-1">{item[1]}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ==============================
                RIGHT SIDE
            ============================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative transform-gpu will-change-transform"
            >
              <div
                className="
                relative w-full h-[650px]
                rounded-[40px] overflow-hidden
                bg-gradient-to-br
                from-[#ff7a00]
                to-orange-300
                shadow-[0_10px_40px_rgba(255,122,0,0.20)]
              "
              >
                {/* TOP CARD */}

                <div
                  className="
                  absolute top-10 left-10
                  bg-white/20 backdrop-blur-xl
                  border border-white/30
                  rounded-3xl p-6
                  w-[280px] shadow-lg
                "
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Startup Growth</h3>

                    <FaGlobe className="text-white" />
                  </div>

                  <div className="mt-8 h-28 rounded-2xl bg-white/20" />

                  <div className="mt-6 flex justify-between text-white">
                    <div>
                      <h2 className="text-2xl font-bold">89%</h2>

                      <p className="text-sm opacity-80">Success Rate</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">4.9</h2>

                      <p className="text-sm opacity-80">Founder Rating</p>
                    </div>
                  </div>
                </div>

                {/* FLOATING CARD */}

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                  absolute bottom-10 right-10
                  bg-white text-[#222]
                  rounded-3xl p-6
                  shadow-lg w-[260px]
                  transform-gpu
                  will-change-transform
                "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                      w-14 h-14 rounded-2xl
                      bg-[#ff7a00]/10
                      flex items-center justify-center
                      text-[#ff7a00] text-2xl
                    "
                    >
                      <FaUsers />
                    </div>

                    <div>
                      <h3 className="font-bold">Global Community</h3>

                      <p className="text-sm text-[#666]">
                        Connect with innovators
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                    mt-5 h-2 rounded-full
                    bg-orange-100 overflow-hidden
                  "
                  >
                    <div
                      className="
                      w-[78%] h-full
                      bg-[#ff7a00] rounded-full
                    "
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ==============================
            SERVICES
        ============================== */}

        <section className="scroll-section px-6 py-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black">
                Startup
                <span className="text-[#ff7a00]"> Services</span>
              </h2>

              <p className="mt-5 text-[#666] max-w-2xl mx-auto">
                A premium startup platform crafted with mentorship, innovation
                and growth-driven opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {cards.map((card, i) => (
                <ServiceCard
                  key={card.title}
                  card={card}
                  onClick={() => {
                    if (card.title === "Register Startup") {
                      navigate("/startup/directory");
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==============================
            ECOSYSTEM
        ============================== */}

        <section className="px-6 pb-32">
          <div
            className="
            max-w-7xl mx-auto rounded-[50px]
            bg-gradient-to-r
            from-[#fff5eb]
            to-[#f5d8ba]
            p-12 shadow-lg
            border border-white/40
          "
          >
            <div className="text-center">
              <h2 className="text-5xl font-black">
                Our
                <span className="text-[#ff7a00]"> Ecosystem</span>
              </h2>

              <p className="mt-4 text-[#666]">
                A connected ecosystem for founders, mentors & incubators.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {ecosystem.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="
                  relative overflow-hidden
                  rounded-[35px]
                  bg-white/70 backdrop-blur-xl
                  border border-white/50
                  p-8 shadow-lg
                  transform-gpu
                  will-change-transform
                "
                >
                  <div
                    className="
                    absolute -top-10 -right-10
                    w-32 h-32
                    bg-[#ff7a00]/10
                    rounded-full blur-2xl
                  "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                      w-20 h-20 rounded-3xl
                      bg-[#ff7a00] text-white
                      flex items-center justify-center
                      text-3xl shadow-lg
                    "
                    >
                      {item.icon}
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">{item.title}</h3>

                    <p className="mt-4 text-[#666] leading-relaxed">
                      {item.desc}
                    </p>

                    <button
                      className="
                      mt-7 px-5 py-3 rounded-2xl
                      bg-[#ff7a00]
                      text-white shadow-md
                    "
                    >
                      Join Us
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
};

export default StartupPage;
