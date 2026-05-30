import HeroCarousel2 from "../components/HeroCarousel2";

import slide1 from "../assets/EntSlider1.webp";
import slide2 from "../assets/EntSlider2.webp";
import slide3 from "../assets/EntSlider3.webp";

import deasraLogo from "../assets/deAsralogo-1.svg";
import teamleaseLogo from "../assets/teamlease-logo.webp";

const companies = [
  "DeAsra",
  "TeamLease Services Limited",
  "DeAsra",
  "TeamLease Services Limited",
  "DeAsra",
  "TeamLease Services Limited",
];

const startupCompanies = [
  {
    name: "DeAsra",
    logo: deasraLogo,
    website: "https://www.deasra.in/",
    description:
      "Helping entrepreneurs and small businesses grow through mentoring, resources and startup ecosystem support.",
  },

  {
    name: "TeamLease Services Limited",
    logo: teamleaseLogo,
    website: "https://group.teamlease.com/",
    description:
      "India’s leading staffing and employability solutions company empowering workforce and entrepreneurship growth.",
  },
];

const slides = [
  {
    id: 1,
    title: "",
    subtitle: "",
    description: "",
    src: slide1,
    accent: "#ff7a00",
  },

  {
    id: 2,
    title: "",
    subtitle: "",
    description: "",
    src: slide2,
    accent: "#f59e0b",
  },

  {
    id: 3,
    title: "",
    subtitle: "",
    description: "",
    src: slide3,
    accent: "#fb923c",
  },
];

export default function EnterpreneurshipPage() {
  return (
    <>
      {/* HERO CAROUSEL */}
      <HeroCarousel2
        slides={slides}
        autoplayDelay={5000}
        showArrows={true}
        showDots={true}
        showBadge={true}
        imageMode="contain"
      />

      {/* MARQUEE */}
      <div className="overflow-hidden border-t border-gray-200 bg-[#f7faf8] py-6">
        <div className="flex w-max animate-marquee">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="px-10 text-sm font-semibold tracking-wide text-gray-500"
            >
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* STARTUP COMPANY CARDS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5eb] via-[#f8f2ea] to-[#f7efe5] px-6 py-24">
        {/* BACKGROUND GLOW */}
        <div className="absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#ff7a00]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-200/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* HEADING */}
          <div className="mb-16 text-left">
            <div
              className="
                inline-flex items-center gap-3
                rounded-full border border-white/40
                bg-white/70 px-5 py-3
                shadow-lg backdrop-blur-xl
              "
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute h-5 w-5 animate-ping rounded-full bg-[#ff7a00]/40"></span>

                <span className="relative h-3 w-3 rounded-full bg-[#ff7a00] shadow-[0_0_15px_#ff7a00]"></span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-wide text-[#444]">
                Entrepreneurship
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#1b1b1b] md:text-6xl">
              Leading Startups
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555]">
              Collaborating with top entrepreneurship and workforce
              organizations to build innovation ecosystems and startup
              opportunities.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid gap-10 lg:grid-cols-2">
            {startupCompanies.map((company, index) => (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-[38px]
                  border border-white/50
                  bg-white/65
                  p-8
                  shadow-[0_15px_60px_rgba(0,0,0,0.06)]
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_30px_90px_rgba(255,122,0,0.20)]
                "
              >
                {/* CARD GLOW */}
                <div
                  className="
                    absolute right-[-80px] top-[-80px]
                    h-64 w-64 rounded-full
                    bg-[#ff7a00]/10 blur-3xl
                    transition-all duration-700
                    group-hover:scale-125
                  "
                />

                {/* TOP SECTION */}
                <div className="relative flex items-start justify-between gap-6">
                  <div
                    className="
                      flex h-28 w-28 shrink-0
                      items-center justify-center
                      rounded-[30px]
                      border border-white/70
                      bg-gradient-to-br
                      from-white to-[#fff5eb]
                      shadow-[inset_4px_4px_12px_rgba(255,255,255,0.9),_10px_10px_30px_rgba(0,0,0,0.05)]
                    "
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative mt-10">
                  <h3 className="text-3xl font-black tracking-tight text-[#1b1b1b]">
                    {company.name}
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-[#555]">
                    {company.description}
                  </p>
                </div>

                {/* BUTTON */}
                <div className="relative mt-10 flex items-center justify-between">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/button inline-flex items-center gap-4
                      rounded-full bg-[#ff7a00]
                      px-7 py-4
                      text-sm font-bold tracking-wide text-white
                      shadow-[0_10px_35px_rgba(255,122,0,0.35)]
                      transition-all duration-300
                      hover:scale-105 hover:bg-[#eb7000]
                    "
                  >
                    <span>Visit Website</span>

                    <span
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full bg-white/20
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover/button:rotate-45
                        group-hover/button:bg-white/30
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.2"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H8M17 7V16"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* BOTTOM HIGHLIGHT */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-[3px] w-0
                    bg-gradient-to-r
                    from-[#ff7a00] to-orange-300
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
