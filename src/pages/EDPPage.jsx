import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import EDPCard from "../components/EDPCard";

import img1 from "../assets/edp1.webp";
import img2 from "../assets/edp2.webp";
import img3 from "../assets/edp3.webp";
import img4 from "../assets/edp4.webp";
import img5 from "../assets/edp5.webp";
import img6 from "../assets/edp6.webp";

const cardData = [
  {
    id: 1,
    image: img1,
    title: "सिलाई कार्यशाला",
    representedBy: "Team MYSBA",
    dateTime: "03 Jan 2026 10:00 AM To 05:00 PM",
    type: "Offline Free Course",
  },
  {
    id: 2,
    image: img2,
    title: "बटन, ढींगरी एवं हिंदी मशरूम की खेती व उत्पादन तकनीक",
    representedBy:
      "गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय, पंतनगर, उत्तराखंड",
    dateTime: "20 Aug 2025 09:00 AM To 05:00 AM",
    type: "Online Fees Rs 1,500.00",
  },
  {
    id: 3,
    image: img3,
    title: "स्पॉन (बीज) उत्पादन तकनीक",
    representedBy:
      "गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय, पंतनगर, उत्तराखंड",
    dateTime: "14 Oct 2025 09:00 AM To 05:00 AM",
    type: "Online Fees Rs 1,500.00",
  },
  {
    id: 4,
    image: img4,
    title: "औषधीय मशरूम की खेती व व्यवसायिक उत्पादन",
    representedBy:
      "गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय, पंतनगर, उत्तराखंड",
    dateTime: "16 Dec 2025 09:00 AM To 05:00 AM",
    type: "Online Fees Rs 3,000.00",
  },
  {
    id: 5,
    image: img5,
    title: "आटा प्लांट कैसे लगाएं ? | How to Start Atta Plant ?",
    representedBy: "RS Choyal",
    dateTime: "06 Aug 2022 02:00 PM To 04:00 PM",
    type: "Online Free Course",
  },
  {
    id: 6,
    image: img6,
    title: "Webinar on Grain Milling & Processing",
    representedBy: "Team Choyal Group",
    dateTime: "18 Jun 2022 12:44 PM To 04:00 PM",
    type: "Online Fees Rs 1,180.00",
  },
];

const EDPPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba]">
        <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#ff7a00]/10 blur-[100px]" />

        <div className="pointer-events-none absolute right-0 top-[200px] h-[300px] w-[300px] rounded-full bg-orange-200/30 blur-[100px]" />

        {/* Hero Section */}

        <section className="relative px-5 py-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start text-left">
              {/* Tag */}
              <div
                className="
    inline-flex items-center gap-3
    bg-white/70 border border-white/40
    backdrop-blur-xl px-5 py-3 rounded-full
    shadow-lg 
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

              {/* Heading */}
              <m.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mt-6 text-4xl font-bold leading-[1.1] text-[#1b1b1b] md:text-6xl"
              >
                Transform Ideas Into
                <br />
                <span className="text-[#ff7a00]">Sustainable Growth</span>
              </m.h1>

              {/* Description */}
              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 max-w-2xl text-base leading-8 text-[#555] md:text-lg"
              >
                Empowering enterprises with innovation, leadership,
                transformation and strategic excellence through modern business
                development programs.
              </m.p>

              {/* CTA */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <button className="group inline-flex items-center gap-2 rounded-2xl bg-[#ff7a00] px-7 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(255,122,0,0.35)] transition-all duration-300 hover:-translate-y-1">
                  Explore Programs
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </m.div>
            </div>
          </div>
        </section>

        {/* Cards Section */}

        <section className="relative px-5 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-[#1b1b1b] md:text-5xl">
                Program Highlights
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[#666]">
                Discover enterprise-focused programs designed to improve
                innovation, leadership, growth and organizational excellence.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {cardData.map((card) => (
                <EDPCard
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  representedBy={card.representedBy}
                  dateTime={card.dateTime}
                  type={card.type}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="px-5 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[36px] border border-white/40 bg-white/50 p-8 backdrop-blur-md md:p-14">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#1b1b1b] md:text-5xl">
                  Ready To Scale Your Enterprise?
                </h3>

                <p className="mx-auto mt-5 max-w-2xl text-[#555]">
                  Join transformative programs that help organizations innovate,
                  grow and lead with confidence.
                </p>

                <button className="mt-8 rounded-2xl bg-[#ff7a00] px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(255,122,0,0.35)] transition-all duration-300 hover:-translate-y-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
};

export default React.memo(EDPPage);
