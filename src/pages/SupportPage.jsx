import React from "react";
import { FaUsers, FaHeadset } from "react-icons/fa";

const SupportPage = () => {
  return (
    <section className="relative py-14 overflow-hidden">
      {/* SAME EXACT BACKGROUND AS CONTACT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba]" />

      {/* SAME GLOWS (SO TRANSITION BLENDS) */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ff7a00] opacity-15 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#ff7a00] opacity-15 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-5">
        {/* WRAPPER (LESS CONTRAST = SMOOTHER MERGE) */}
        <div
          className="
          grid md:grid-cols-2
          bg-white/50 backdrop-blur-xl
          border border-white/30
          rounded-3xl overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.05)]
        "
        >
          {/* CENTER LINE (SOFTENED) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#ff7a00]/30 to-transparent" />

          {/* LEFT */}
          <div className="p-7 md:p-10 hover:bg-white/60 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#ffb36b] flex items-center justify-center text-white mb-5">
              <FaUsers />
            </div>

            <h3 className="text-xl font-bold text-[#1b1b1b]">
              Sangathan Member
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Connect with verified members and build strong collaboration
              ecosystem.
            </p>

            <div className="mt-4 text-xs text-[#ff7a00] font-semibold">
              ACTIVE COMMUNITY
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-7 md:p-10 hover:bg-white/60 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#ffb36b] flex items-center justify-center text-white mb-5">
              <FaHeadset />
            </div>

            <h3 className="text-xl font-bold text-[#1b1b1b]">
              Need Customer Support
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Real human assistance for queries, guidance and onboarding
              support.
            </p>

            <div className="mt-4 text-xs text-[#ff7a00] font-semibold">
              24/7 ASSISTANCE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
