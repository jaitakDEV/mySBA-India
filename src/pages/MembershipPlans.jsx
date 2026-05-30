import React, { memo } from "react";
import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaArrowRight,
  FaCrown,
  FaRocket,
  FaGem,
  FaBolt,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";

const plans = [
  {
    name: "NANO",
    oldPrice: "Rs 499",
    price: "Rs 99",
    icon: FaBolt,
    badge: "Starter",

    included: [
      "1 Consultancy Session on call",
      "Prototype Project Report Industry Related Government & Finance Policies Knowledge Sharing",
      "Membership Valid For 15 Days",
    ],

    excluded: [
      "2 Courses included",
      "EDP Training",
      "Prototype Project Report",
      "Handholding Support",
      "Free access to limited Industry Workshop And Seminars (Online & Offline)",
      "IPR Registration (govt. Fee excluded)",
      "GST & Udyog Aadhar Registration (govt. Fee excluded)",
      "Operations support Free access to MySBA training courses",
    ],
  },

  {
    name: "MICRO",
    oldPrice: "Rs 899",
    price: "Rs 499",
    icon: FaRocket,
    badge: "Popular",

    included: [
      "2 Consultancy Session on call",
      "Prototype Project Report Industry Related Government & Finance Policies Knowledge Sharing",
      "Membership Valid For 30 Days.",
    ],

    excluded: [
      "2 Courses included",
      "EDP Training",
      "Prototype Project Report",
      "Handholding Support",
      "Free access to limited Industry Workshop And Seminars (Online & Offline)",
      "Industry Related Government & Finance Policies Knowledge Sharing",
      "IPR Registration ( govt. Fee excluded)",
      "Operations support Free access to MySBA training courses",
      "GST & Udyog Aadhar Registration ( govt. Fee excluded)",
    ],
  },

  {
    name: "SMALL",
    oldPrice: "Rs 1999",
    price: "Rs 999",
    icon: FaGem,
    badge: "Growth",

    included: [
      "3 Consultancy Session",
      "Prototype Project Report",
      "Supplier Connect & Industry Expert Services",
      "GST & Udyog Aadhar Registration of Business ( govt. Fee excluded)",
      "Industry Related Government & Finance Policies Knowledge Sharing",
      "Membership Valid For 1 Year.",
      "2 Courses included",
    ],

    excluded: [
      "EDP Training",
      "Free access to limited Industry Workshop And Seminars (Online & Offline)",
      "Industry Related Government & Finance Policies Knowledge Sharing",
      "IPR Registration ( govt. Fee excluded)",
      "Operations support Free access to MySBA training courses",
    ],
  },

  {
    name: "MEDIUM",
    oldPrice: "Rs 2999",
    price: "Rs 1999",
    icon: FaShieldAlt,
    badge: "Advanced",

    included: [
      "Project Report",
      "Supplier Connect & Industry Expert Service",
      "Industry Related Government & Finance Polices Knowledge Sharing",
      "EDP Training",
      "GST & Udyog Aadhar Registration ( govt. Fee excluded)",
      "Free access to limited Industry Workshop And Seminars (Online & Offline)",
      "Free access to 5 MySBA training courses",
      "Membership Valid For 1 Year",
    ],

    excluded: [
      "Handholding Support",
      "Industry Related Government & Finance Policies Knowledge Sharing",
      "IPR Registration ( govt. Fee excluded)",
      "Operations support Free access to MySBA training courses",
    ],
  },

  {
    name: "ENTER+",
    oldPrice: "Rs 4999",
    price: "Rs 2999",
    icon: FaCrown,
    badge: "Premium",

    included: [
      "Project Report",
      "Supplier Connect Services",
      "Handholding Support",
      "Bankable Customized Project Report",
      "Company/Firm Registration Assistance ( govt. Fee excluded)",
      "IPR Registration ( govt. Fee excluded)",
      "EDP Training",
      "GST; Udhyam; FSSAI; IEC Code; Spice Board ; APEDA; HACCAP/ISO; Shop Act; Weight & Measurement; Bar Code Registrations ( govt. Fee excluded)",
      "Free access to Industry Workshop and Seminar",
      "Industry Related Government & Finance Policies Knowledge Sharing",
      "Operations support Free access to MySBA training courses",
    ],

    excluded: [],
  },
];

const PlanCard = memo(({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,122,0,0.12)] transition-all duration-300">
      {/* HEADER */}
      <div className="relative px-6 py-7 bg-gradient-to-r from-orange-500 to-amber-400 text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.18em] opacity-80">
              {item.badge}
            </span>

            <h2 className="mt-1 text-3xl font-bold flex items-center gap-2">
              {item.name}
            </h2>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-lg flex items-center justify-center border border-white/20">
            <Icon className="text-2xl text-white" />
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-6 flex flex-col flex-1 h-full">
        {/* PRICE */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            {item.oldPrice}
          </span>

          <span className="text-4xl font-bold text-[#ff7a00] leading-none">
            {item.price}
          </span>
        </div>

        {/* INCLUDED */}
        <div className="mt-7 space-y-3">
          {item.included.map((f, i) => (
            <div key={`inc-${i}`} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 text-sm mt-1 shrink-0" />

              <p className="text-[14px] text-[#555] leading-[1.7]">{f}</p>
            </div>
          ))}
        </div>

        {/* EXCLUDED */}
        <div className="mt-5 space-y-3">
          {item.excluded.map((f, i) => (
            <div key={`exc-${i}`} className="flex items-start gap-3 opacity-60">
              <FaTimes className="text-red-400 text-sm mt-1 shrink-0" />

              <p className="text-[14px] text-[#777] line-through leading-[1.7]">
                {f}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON FIXED BOTTOM */}
        <div className="mt-auto pt-8">
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold flex items-center justify-center gap-3 shadow-[0_10px_35px_rgba(255,122,0,0.18)] hover:opacity-95 transition-all">
            Buy Plan
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
});

PlanCard.displayName = "PlanCard";

const MembershipPlans = () => {
  return (
    <div className="min-h-screen bg-[#f8f2ea] overflow-hidden">
      <section className="relative px-5 md:px-8 py-24">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ef] via-[#f8efe5] to-[#f5dcc2]" />

        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[#ff7a00]/15 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col items-start text-left max-w-3xl">
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
                Membership Plans
              </p>
            </motion.div>

            <h1 className="mt-7 text-4xl md:text-6xl font-bold leading-tight">
              Unlock Membership <span className="text-[#ff7a00]">Benefits</span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-2xl text-lg leading-relaxed">
              Compare plans and choose what fits your business needs.
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-7 mt-20 items-stretch">
            {plans.map((p, i) => (
              <PlanCard key={i} item={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(MembershipPlans);
