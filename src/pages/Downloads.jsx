// src/pages/Downloads.jsx

import { motion } from "framer-motion";
import {
  FaDownload,
  FaFileAlt,
  FaBook,
  FaProjectDiagram,
} from "react-icons/fa";

const downloads = [
  { title: "Young Generation Bharat (YGB)", icon: <FaProjectDiagram /> },
  { title: "Swadeshi Sankalp Daud", icon: <FaProjectDiagram /> },
  { title: "Project Reports", icon: <FaFileAlt /> },
  { title: "Catalogs", icon: <FaBook /> },
  { title: "Books", icon: <FaBook /> },
  { title: "My SBA", icon: <FaFileAlt /> },
  { title: "Project Report", icon: <FaFileAlt /> },
];

const Downloads = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f2ea]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#ff7a00]/10 blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[400px] w-[400px] rounded-full bg-orange-300/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-20">
        {/* HEADER */}
        <div className="mb-16 text-left relative">
          {/* small badge */}
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
              DOWNLOAD CENTER
            </p>
          </div>

          {/* title */}
          <h1 className="mt-6 text-5xl font-black leading-tight text-[#1b1b1b] md:text-7xl">
            Downloads
          </h1>

          {/* underline */}
          <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#ff7a00] to-transparent" />

          {/* subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#666]">
            Access all official resources in one place with fast, secure and
            easy downloads.
          </p>
        </div>

        {/* LIST UI */}
        <div className="space-y-4">
          {downloads.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/50
                bg-white/60
                px-6
                py-4
                backdrop-blur-xl
                shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                hover:shadow-[0_15px_40px_rgba(255,122,0,0.15)]
                transition-all
              "
            >
              {/* LEFT SIDE */}
              <div className="flex items-center gap-4">
                {/* ICON */}
                <div
                  className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#fff5eb]
                  text-[#ff7a00]
                  group-hover:bg-[#ff7a00]
                  group-hover:text-white
                  transition
                "
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h2 className="text-base font-bold text-[#1b1b1b]">
                  {item.title}
                </h2>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-6">
                <button
                  className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#111]
                  px-5
                  py-2
                  text-sm
                  font-bold
                  text-white
                  hover:bg-[#ff7a00]
                  transition
                "
                >
                  <FaDownload className="text-xs" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
