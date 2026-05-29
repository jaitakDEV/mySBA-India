import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaLaptopCode,
  FaNewspaper,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

const cards = [
  {
    title: "Digital Volunteer",
    icon: <FaLaptopCode />,
    rotate: "-rotate-2",
  },
  {
    title: "SBA Karyakarta",
    icon: <FaUsers />,
    rotate: "rotate-1",
  },
  {
    title: "SBA Purnakaalik",
    icon: <FaUserTie />,
    rotate: "-rotate-1",
  },
  {
    title: "MySBA Mentor",
    icon: <FaUsers />,
    rotate: "rotate-2",
  },
  {
    title: "Incubating",
    icon: <FaBriefcase />,
    rotate: "-rotate-2",
  },
  {
    title: "MySBA Associate",
    icon: <FaUsers />,
    rotate: "rotate-1",
  },
  {
    title: "MySBA Advisor",
    icon: <FaUserTie />,
    rotate: "-rotate-1",
  },
  {
    title: "Job Seeker",
    icon: <FaBriefcase />,
    rotate: "rotate-2",
  },
  {
    title: "Job Provider",
    icon: <FaBriefcase />,
    rotate: "-rotate-1",
  },
  {
    title: "NEWS Reporter",
    icon: <FaNewspaper />,
    rotate: "rotate-1",
  },
];

const JoinUs = () => {
  return (
    <div className="relative overflow-hidden bg-[#f8f2ea]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#ff7a00]/15 blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[400px] w-[400px] rounded-full bg-orange-300/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8">
        {/* HERO */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
    mb-6
    inline-flex
    items-center
    gap-3
    bg-white/70
    backdrop-blur-xl
    px-5
    py-3
    rounded-full
    shadow-lg
    border
    border-white/40
  "
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-5 h-5 rounded-full bg-[#ff7a00]/40 animate-ping"></span>
              <span className="relative w-3 h-3 rounded-full bg-[#ff7a00] shadow-[0_0_15px_#ff7a00]"></span>
            </div>

            <p className="text-sm font-semibold tracking-wide text-[#444] uppercase">
              JOIN US
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-4px]
              text-[#111]
              md:text-8xl
            "
          >
            Not Just A
            <span className="relative mx-4 inline-block text-[#ff7a00]">
              Team
              <svg
                className="absolute -bottom-5 left-0 w-full"
                viewBox="0 0 300 30"
                fill="none"
              >
                <path
                  d="M5 20C80 5 220 5 295 20"
                  stroke="#ff7a00"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />A Movement.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 max-w-2xl text-lg leading-8 text-[#666]"
          >
            Join creators, innovators, mentors and professionals building
            opportunities, impact and the future together.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-2
        rounded-2xl
        border
        border-white/40
        bg-white/70
        p-4
        text-center
        backdrop-blur-xl
        shadow-[0_8px_25px_rgba(0,0,0,0.05)]
        hover:shadow-[0_12px_30px_rgba(255,122,0,0.25)]
        transition-all
      "
            >
              <div
                className="
          flex
          h-10
          w-10
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

              {/* title */}
              <p className="text-[12px] font-extrabold text-[#1b1b1b] leading-tight">
                {item.title}
              </p>
              {/* JOIN US label */}
              <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#ff7a00]">
                Join Us
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
