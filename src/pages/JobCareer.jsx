// src/pages/JobCareer.jsx

import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

import {
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaBuilding,
  FaMapMarkerAlt,
  FaSearch,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    value: "50K+",
    label: "Job Seekers",
  },
  {
    value: "12K+",
    label: "Active Jobs",
  },
  {
    value: "8K+",
    label: "Companies",
  },
  {
    value: "5K+",
    label: "Successful Hires",
  },
];

const features = [
  {
    title: "Find Jobs",
    desc: "Discover jobs near your location instantly.",
    icon: FaSearch,
  },
  {
    title: "Smart Hiring",
    desc: "Companies can hire verified talent quickly.",
    icon: FaBuilding,
  },
  {
    title: "Career Growth",
    desc: "Get better opportunities for your future.",
    icon: FaBriefcase,
  },
  {
    title: "Trusted Platform",
    desc: "Thousands already trust our ecosystem.",
    icon: FaUsers,
  },
];

const jobs = [
  {
    role: "Frontend Developer",
    company: "TechNova Pvt Ltd",
    location: "Jaipur",
    salary: "₹35K - ₹60K",
  },
  {
    role: "Digital Marketing Executive",
    company: "Growth Media",
    location: "Delhi",
    salary: "₹25K - ₹45K",
  },
  {
    role: "UI/UX Designer",
    company: "PixelCraft",
    location: "Remote",
    salary: "₹40K - ₹70K",
  },
];

export default function JobCareer() {
  return (
    <div className="relative overflow-hidden bg-[#f8f2ea] text-[#222]">
      {/* BACKGROUND */}
      <div className="absolute left-[-150px] top-[-80px] h-[350px] w-[350px] rounded-full bg-[#ff7a00]/10 blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-150px] h-[350px] w-[350px] rounded-full bg-orange-200/20 blur-3xl" />

      {/* HERO */}
      <section className="relative px-4 pb-20 pt-10 sm:px-6 md:px-10 lg:px-16 lg:pb-28 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff7a00]/10 bg-white/70 px-4 py-2 text-xs font-semibold text-[#ff7a00] backdrop-blur-xl sm:text-sm">
                <FaStar />
                India's Smart Career Portal
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight text-[#1b1b1b] sm:text-5xl lg:text-7xl">
                Find Jobs &
                <span className="bg-gradient-to-r from-[#ff7a00] to-orange-400 bg-clip-text text-transparent">
                  {" "}
                  Hire Talent
                </span>{" "}
                Faster
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#555] sm:text-[16px]">
                MySBA Job & Career Portal helps Job Seekers find opportunities
                and Job Providers hire the right talent through one powerful
                ecosystem.
              </p>

              {/* SEARCH */}
              <div className="mt-8 flex flex-col gap-4 rounded-[30px] border border-white/50 bg-white/70 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-3 rounded-2xl bg-[#f8f2ea] px-4 py-4">
                  <FaSearch className="text-[#ff7a00]" />

                  <input
                    type="text"
                    placeholder="Search jobs, skills..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#777]"
                  />
                </div>

                <div className="flex flex-1 items-center gap-3 rounded-2xl bg-[#f8f2ea] px-4 py-4">
                  <FaMapMarkerAlt className="text-[#ff7a00]" />

                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#777]"
                  />
                </div>

                <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#ff7a00] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(255,122,0,0.35)] transition-all duration-300 hover:scale-[1.02]">
                  Search
                  <FaArrowRight />
                </button>
              </div>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Remote Jobs",
                  "Startup Jobs",
                  "Part Time",
                  "Internships",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-full border border-white/50 bg-white/60 px-4 py-2 text-xs font-medium text-[#555] backdrop-blur-xl sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[380px] w-[380px] rounded-full bg-[#ff7a00]/10 blur-3xl" />

            {/* MAIN CARD */}
            <div className="relative w-full max-w-[520px] rounded-[36px] border border-white/50 bg-white/60 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.06)] backdrop-blur-3xl">
              {/* TOP */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#1b1b1b]">
                    Featured Jobs
                  </h3>

                  <p className="mt-1 text-sm text-[#666]">
                    Latest opportunities for you
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff5eb] px-4 py-2 text-sm font-semibold text-[#ff7a00]">
                  Live Jobs
                </div>
              </div>

              {/* JOB LIST */}
              <div className="mt-6 space-y-4">
                {jobs.map((job, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="group rounded-[26px] border border-white/50 bg-[#fffaf5] p-5 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(255,122,0,0.12)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-[#1b1b1b]">
                          {job.role}
                        </h4>

                        <p className="mt-1 text-sm text-[#666]">
                          {job.company}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#555]">
                            {job.location}
                          </span>

                          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#ff7a00]">
                            {job.salary}
                          </span>
                        </div>
                      </div>

                      <button className="rounded-2xl bg-[#ff7a00] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(255,122,0,0.25)]">
                        Apply
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -bottom-8 -left-8 hidden rounded-[28px] border border-white/50 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7a00] to-orange-400 text-xl text-white shadow-[0_10px_25px_rgba(255,122,0,0.35)]">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-[#1b1b1b]">50K+</h4>

                    <p className="text-sm text-[#666]">Registered Users</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative px-4 pb-16 sm:px-6 md:px-10 lg:px-16 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[30px] border border-white/50 bg-white/60 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#ff7a00]/10 blur-3xl" />

              <h3 className="relative text-4xl font-black text-[#ff7a00]">
                {item.value}
              </h3>

              <p className="relative mt-3 text-sm text-[#666]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative px-4 pb-20 sm:px-6 md:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-flex rounded-full border border-[#ff7a00]/10 bg-white/60 px-4 py-2 text-xs font-semibold text-[#ff7a00] backdrop-blur-xl sm:text-sm">
              Why Choose Us
            </div>

            <h2 className="mt-5 text-3xl font-black text-[#1b1b1b] sm:text-5xl">
              How Will The Portal Help?
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/50 bg-white/60 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ff7a00]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff7a00] to-orange-400 text-xl text-white shadow-[0_10px_25px_rgba(255,122,0,0.35)]">
                      <Icon />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#1b1b1b]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#666]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
