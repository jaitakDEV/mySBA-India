import React, { useEffect, useState, useRef } from "react";
import {
  FaUsers,
  FaHandsHelping,
  FaBuilding,
  FaCalendarAlt,
  FaBook,
  FaGlobe,
} from "react-icons/fa";

const statsData = [
  { label: "Volunteers", value: 15260, icon: FaUsers },
  { label: "Service Provider", value: 670, icon: FaHandsHelping },
  { label: "JSK", value: 139, icon: FaBuilding },
  { label: "Events", value: 33, icon: FaCalendarAlt },
  { label: "Courses", value: 4, icon: FaBook },
  { label: "Sahyog Kendera", value: 22800, icon: FaGlobe },
];

const useCountUpOnView = (end, duration = 1500, startTrigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);

      setCount(Math.floor(percent * end));

      if (percent < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startTrigger]);

  return count;
};

const StatCard = ({ item, start }) => {
  const Icon = item.icon;
  const count = useCountUpOnView(item.value, 1500, start);

  return (
    <div
      className="
      bg-white/80 backdrop-blur-xl
      border border-white/60
      rounded-2xl p-6 text-center
      shadow-[0_10px_30px_rgba(0,0,0,0.05)]
      hover:-translate-y-1
      transition-all duration-200
    "
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center text-white">
        <Icon />
      </div>

      <h3 className="text-3xl font-bold text-[#ff7a00]">{count}</h3>

      <p className="text-sm text-gray-600 mt-1">{item.label}</p>
    </div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const StatsSection = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#f8f2ea] relative overflow-hidden"
    >
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ff7a00]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-orange-300/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#ff7a00]">Impact</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Numbers animate only when section comes into view
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statsData.map((item, i) => (
            <StatCard key={i} item={item} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
