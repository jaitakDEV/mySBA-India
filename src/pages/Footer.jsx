import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub, FaArrowUp } from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";
import fotterCR from "../assets/fotterCR.svg";
import fotterIT from "../assets/fotterIT.svg";

const Footer = () => {
  const quickLinks = [
    { name: "Services/Product Offers", link: "#" },
    { name: "Terms & Conditions", link: "#" },
    { name: "Privacy Policy", link: "#" },
    { name: "Shiping/Delivery Policy", link: "#" },
    { name: "Refund & Cancellation Policy", link: "#" },
    { name: "Customer Support", link: "#" },
    { name: "Contact", link: "#" },
    { name: "Members Login", link: "#" },
  ];

  const services = [
    { name: "Events", link: "#" },
    { name: "Services", link: "#" },
    { name: "Courses", link: "#" },
    { name: "Project Report", link: "#" },
    { name: "Membership", link: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: "#",
    },
    {
      icon: <FaLinkedinIn />,
      link: "#",
    },
    {
      icon: <FaGithub />,
      link: "#",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative overflow-hidden pt-24 pb-10 px-6 md:px-12 border-t border-white/10"
      style={{
        background:
          "linear-gradient(90deg, rgba(140,60,0,0.96) 0%, rgba(200,85,0,0.95) 50%, rgba(255,122,0,0.94) 100%)",
        color: "#fffaf5",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] right-[-100px] w-[320px] h-[320px] bg-[#ff7a00]/30 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[280px] h-[280px] bg-white/10 blur-3xl rounded-full" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-wide text-[#fff3e8]">
              My<span className="text-white">SBA</span>
            </h2>

            <p className="mt-5 text-[#fff3e8]/80 leading-relaxed text-[15px]">
              Big dreams need bold solutions. MySBA empowers India’s youth to
              face challenges, overcome fears, and create meaningful change for
              a brighter future.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-7">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#ff7a00] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-7 text-[#fff3e8]">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="group flex items-center justify-between text-[#fff3e8]/80 hover:text-white transition-all duration-300 text-[15px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white transition-all duration-300" />

                      <span>{item.name}</span>
                    </div>

                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-7 text-[#fff3e8]">
              Services
            </h3>

            <ul className="space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.link}
                    className="group flex items-center justify-between text-[#fff3e8]/80 hover:text-white transition-all duration-300 text-[15px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white transition-all duration-300" />

                      <span>{service.name}</span>
                    </div>

                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NEWSLETTER */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-7 text-[#fff3e8]">
              Newsletter
            </h3>

            <p className="text-[#fff3e8]/80 mb-5 text-[15px] leading-relaxed">
              Subscribe to receive updates, leadership insights, and upcoming
              opportunities from MySBA.
            </p>

            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl text-white placeholder:text-[#ffe7d1]/70 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <button className="bg-white hover:bg-[#fff3e8] text-[#ff7a00] py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-[1.02]">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* BOTTOM LOGO STRIP */}
      <div className="mt-8 border-t border-white/20 pt-5">
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 flex-wrap">
          {/* COPYRIGHT */}
          <img
            src={fotterCR}
            alt="Copyright"
            className="
      w-[200px]
      sm:w-[260px]
      md:w-[380px]
      h-auto
      object-contain
    "
          />

          {/* IT COMPANY */}
          <img
            src={fotterIT}
            alt="IT Company"
            className="
      w-[130px]
      sm:w-[170px]
      md:w-[240px]
      h-auto
      object-contain
    "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
