import React from "react";
import { m } from "framer-motion";
import { FiArrowUpRight, FiCalendar, FiUser, FiMapPin } from "react-icons/fi";

const EDPCard = ({ image, title, representedBy, dateTime, type }) => {
  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-[28px] border border-white/40 bg-white/60 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(255,122,0,0.18)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-[240px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-[#1b1b1b]">{title}</h3>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff7a00]/10 text-[#ff7a00] transition-all duration-300 group-hover:bg-[#ff7a00] group-hover:text-white">
            <FiArrowUpRight size={18} />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-[#666]">
            <FiUser size={15} className="text-[#ff7a00]" />
            <span>
              <span className="font-semibold text-[#222]">Represented By:</span>{" "}
              {representedBy}
            </span>
          </div>

          <div className="flex items-start gap-2 text-sm text-[#666]">
            <FiCalendar
              size={15}
              className="mt-[2px] shrink-0 text-[#ff7a00]"
            />
            <span>{dateTime}</span>
          </div>

          <div className="inline-flex items-center rounded-full bg-[#ff7a00]/10 px-3 py-2 text-sm font-medium text-[#ff7a00]">
            {type}
          </div>
        </div>
      </div>
    </m.article>
  );
};

export default React.memo(EDPCard);
