import React from "react";
import CoursesHero from "../assets/CoursesHero.png";
import { motion } from "framer-motion";

const USERS = [
  { name: "CAREER COUNSELLING COURSES", date: "", checked: false },
  { name: "EDP COURSES", date: "", checked: true },
  { name: "LANGUAGE COURSES", date: "", checked: false },
];

// Badge Ring
function BadgeRing() {
  return (
    <div className="absolute left-[-20px] top-[35px] z-[5] h-[92px] w-[92px] animate-[floatY_4s_ease-in-out_infinite]">
      <svg
        viewBox="0 0 92 92"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[spin_18s_linear_infinite]"
      >
        <defs>
          <path
            id="circle-text"
            d="M 46,46 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0"
          />
        </defs>

        <circle
          cx="46"
          cy="46"
          r="45"
          fill="rgba(255,255,255,0.65)"
          stroke="#ff7a00"
          strokeWidth="1.8"
        />

        <text
          fontSize="7.5"
          fontWeight="700"
          fill="#ff7a00"
          letterSpacing="1.5"
          className="[font-family:Manrope,sans-serif]"
        >
          <textPath href="#circle-text">
            ★ Best E-learning Platform ★ Best E-learning Platform
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-[22px] font-black text-[#ff7a00]">
        D
      </div>
    </div>
  );
}

// Main Component
export default function Courses() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes floatY {
            0%,100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes ripple {
            0% {
              transform: scale(1);
              opacity: .35;
            }
            70% {
              transform: scale(1.7);
              opacity: 0;
            }
            100% {
              transform: scale(1.7);
              opacity: 0;
            }
          }

          @keyframes pulse {
            0%,100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: .6;
            }
          }
        `}
      </style>

      <div className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,#fff5eb_0%,#f7efe5_45%,#f5d8ba_100%)] text-[#222] [font-family:Manrope,sans-serif]">
        {/* HERO SECTION */}
        <section className="relative grid min-h-screen grid-cols-2 items-center gap-0 overflow-hidden bg-transparent px-[60px] py-[60px] max-[900px]:grid-cols-1 max-[900px]:px-[30px]">
          {/* LEFT CONTENT */}
          <div className="relative z-[2] max-w-[600px]">
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
                Courses
              </p>
            </div>

            <h1 className="mb-[22px] pt-5 translate-y-[28px] text-[clamp(38px,4.5vw,58px)] font-black leading-[1.08] tracking-[-1.5px] text-[#1b1b1b] opacity-0 animate-[fadeUp_0.7s_0.2s_forwards]">
              Flexible &amp; Scalable.
              <br />
              Your Platform for High
              <br />
              Value training.
            </h1>

            <p className="mb-[38px] max-w-[440px] translate-y-[24px] text-[16px] font-medium leading-[1.65] text-[#555] opacity-0 animate-[fadeUp_0.7s_0.35s_forwards]">
              Start your journey toward financial freedom with our practical
              courses. Learn skills to build your own business and become your
              own boss.
            </p>

            <div className="flex translate-y-[20px] items-center gap-7 opacity-0 animate-[fadeUp_0.7s_0.5s_forwards]">
              {/* CTA BUTTON */}
              <button className="flex items-center gap-[10px] rounded-[14px] bg-[#ff7a00] px-[30px] py-[15px] text-[15px] font-extrabold text-white shadow-[0_8px_30px_rgba(255,122,0,0.35)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#e96f00] hover:shadow-[0_12px_35px_rgba(255,122,0,0.45)]">
                Start Free Trial
                <span className="text-[18px]">↗</span>
              </button>

              {/* PLAY BUTTON */}
              <div className="flex cursor-pointer items-center gap-[14px] transition-opacity duration-200 hover:opacity-[0.82]">
                <div className="relative flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-[#ff7a00] shadow-[0_4px_20px_rgba(255,122,0,0.35)] transition-all duration-200 hover:scale-[1.08] hover:shadow-[0_8px_28px_rgba(255,122,0,0.45)]">
                  <div className="absolute inset-0 rounded-full bg-[#ff7a00] opacity-35 animate-[ripple_2s_infinite]" />

                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    className="relative z-[1]"
                  >
                    <path d="M1 1.5L15 9L1 16.5V1.5Z" fill="white" />
                  </svg>
                </div>

                <span className="text-[15px] font-bold text-[#222]">
                  How it Work
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex h-[620px] items-end justify-center opacity-0 animate-[fadeIn_0.9s_0.3s_forwards] max-[900px]:mt-10 max-[900px]:h-[420px]">
            <div className="relative h-full w-full">
              {/* STUDENTS IMAGE */}
              <div className="absolute bottom-0 left-1/2 z-[2] h-full w-[90%] -translate-x-1/2">
                <img
                  src={CoursesHero}
                  alt="Students"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* BADGE */}
              <BadgeRing />

              {/* DESIGNER TAG */}
              <div className="absolute right-[-10px] top-[80px] z-[5] rotate-[8deg] rounded-xl bg-[#ff7a00] px-[14px] py-[10px] pr-[18px] text-[11px] font-extrabold tracking-[0.3px] text-white shadow-[0_8px_24px_rgba(255,122,0,0.35)] backdrop-blur-xl animate-[floatY_5s_1s_ease-in-out_infinite]">
                <span className="mr-2 inline-block h-[8px] w-[8px] rounded-full bg-white align-middle" />
                Brain Storming
              </div>

              {/* ARROW */}
              <div className="absolute left-[30px] top-[140px] z-[5] drop-shadow-[2px_4px_8px_rgba(255,122,0,0.35)] animate-[floatY_3.5s_0.8s_ease-in-out_infinite]">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <polygon points="22,4 40,40 22,32 4,40" fill="#ff7a00" />
                  <polygon points="22,4 40,40 22,32" fill="#d65f00" />
                </svg>
              </div>

              {/* USERS CARD */}
              <div className="absolute bottom-[60px] right-[-28px] z-[5] min-w-[190px] rounded-2xl border border-white/40 bg-[rgba(255,255,255,0.7)] px-[18px] py-[14px] shadow-[0_10px_40px_rgba(255,122,0,0.15)] backdrop-blur-xl animate-[floatY_4.5s_0.5s_ease-in-out_infinite]">
                {USERS.map((u, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b border-[rgba(255,122,0,0.08)] py-[6px] [font-family:Inter,sans-serif] last:border-none"
                  >
                    <div
                      className={`flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                        u.checked
                          ? "bg-[#ffe7d1] text-[#ff7a00]"
                          : "bg-[#f1e5d8] text-[#555]"
                      }`}
                    >
                      {u.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div className="flex-1">
                      <div className="text-[12px] font-bold text-[#222]">
                        {u.name}
                      </div>

                      <div className="text-[10px] text-[#777]">{u.date}</div>
                    </div>

                    {u.checked ? (
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#ff7a00] text-[10px] text-white">
                        ✓
                      </div>
                    ) : (
                      <div className="h-[18px] w-[18px] rounded-full border-2 border-[#d9c8b8]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COURSE CARDS SECTION */}
        <div className="relative z-[10] mt-[-40px] grid grid-cols-3 gap-6 bg-transparent px-[60px] pb-[80px] max-[900px]:grid-cols-1 max-[900px]:px-[30px]">
          {/* CARD 1 */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-[rgba(255,255,255,0.72)] p-[28px] shadow-[0_10px_40px_rgba(255,122,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(255,122,0,0.22)]">
            <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-[#ff7a00]/10 blur-3xl" />

            {/* ORIGINAL ICON */}
            <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#fff1e4] shadow-inner">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3L20 7V12C20 17 16.5 20.7 12 22C7.5 20.7 4 17 4 12V7L12 3Z"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 11.5L11 13L14.5 9.5"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mb-3 text-[22px] font-extrabold leading-[1.3] text-[#1b1b1b]">
              CAREER COUNSELLING COURSES
            </h3>

            <p className="mb-6 text-[15px] leading-[1.7] text-[#666]">
              Expert mentorship and guidance programs to help students choose
              the right career path with confidence.
            </p>

            <button className="flex items-center gap-2 text-[15px] font-bold text-[#ff7a00] transition-all duration-300 group-hover:gap-4">
              Read More
              <span>→</span>
            </button>
          </div>

          {/* CARD 2 */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-[rgba(255,255,255,0.72)] p-[28px] shadow-[0_10px_40px_rgba(255,122,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(255,122,0,0.22)]">
            <div className="absolute left-[-30px] top-[-30px] h-[110px] w-[110px] rounded-full bg-[#ff7a00]/10 blur-3xl" />

            {/* ORIGINAL ICON */}
            <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#fff1e4] shadow-inner">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 19H20"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M7 16V8"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 16V5"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M17 16V11"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mb-3 text-[22px] font-extrabold leading-[1.3] text-[#1b1b1b]">
              EDP COURSES
            </h3>

            <p className="mb-6 text-[15px] leading-[1.7] text-[#666]">
              Skill-focused entrepreneurial development programs designed for
              startups, professionals, and future business leaders.
            </p>

            <button className="flex items-center gap-2 text-[15px] font-bold text-[#ff7a00] transition-all duration-300 group-hover:gap-4">
              Read More
              <span>→</span>
            </button>
          </div>

          {/* CARD 3 */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-[rgba(255,255,255,0.72)] p-[28px] shadow-[0_10px_40px_rgba(255,122,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(255,122,0,0.22)]">
            <div className="absolute bottom-[-40px] right-[-30px] h-[130px] w-[130px] rounded-full bg-[#ff7a00]/10 blur-3xl" />

            {/* ORIGINAL ICON */}
            <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#fff1e4] shadow-inner">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 4C16.42 4 20 7.58 20 12"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 20C16.42 20 20 16.42 20 12"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 4V20"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#ff7a00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mb-3 text-[22px] font-extrabold leading-[1.3] text-[#1b1b1b]">
              LANGUAGE COURSES
            </h3>

            <p className="mb-6 text-[15px] leading-[1.7] text-[#666]">
              Learn global languages with interactive sessions, real
              communication practice, and industry-ready fluency training.
            </p>

            <button className="flex items-center gap-2 text-[15px] font-bold text-[#ff7a00] transition-all duration-300 group-hover:gap-4">
              Read More
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
