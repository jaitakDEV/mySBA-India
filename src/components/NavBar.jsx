// Navbar.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";

import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const location = useLocation();

  const menuItems = [
    { name: "About Us", path: "/about-us" },

    {
      name: "Events",
      dropdown: [
        { name: "Events Home", path: "/events" },
        { name: "EDP", path: "/events/edp" },
        { name: "Webinar", path: "/events/webinar" },
        { name: "Seminar", path: "/events/seminar" },
        { name: "Trade Show", path: "/events/trade-show" },
        { name: "Upcoming", path: "/events/upcoming" },
        { name: "Past Events", path: "/events/past-events" },
      ],
    },

    {
      name: "Services",
      dropdown: [
        { name: "Mentoring", path: "/services/mentoring" },
        { name: "Tax Services", path: "/services/tax-services" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "IT Services", path: "/services/it-services" },
        { name: "Incubation", path: "/services/incubation" },
      ],
    },

    {
      name: "Courses",
      dropdown: [{ name: "EDP Courses", path: "/courses/edp-courses" }],
    },

    {
      name: "Entrepreneurship",
      dropdown: [
        { name: "Startup", path: "/entrepreneurship/startup" },
        { name: "FFO/FPO", path: "/entrepreneurship/ffo-fpo" },
      ],
    },

    { name: "Scheme", path: "/scheme" },
    { name: "Job & Career", path: "/job-career" },
    { name: "Join Us", path: "/join-us" },
    { name: "Download", path: "/download" },
    { name: "Shop", path: "/shop" },
    { name: "News", path: "/news" },
  ];

  const topActions = [
    { name: "JSKSwadeshi", path: "/jskswadeshi" },
    { name: "Abhiyan", path: "/abhiyan" },
    { name: "Sankalp", path: "/sankalp" },
    { name: "Mela", path: "/mela" },
    { name: "Donate", path: "/donate" },
    { name: "Login", path: "/login" },
  ];

  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Hide top bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999] pointer-events-none">
        {/* TOP BAR */}
        <div
          className={`hidden lg:flex justify-between items-center px-4 xl:px-10 text-sm overflow-hidden transition-all duration-500 pointer-events-auto ${
            hideTopBar
              ? "max-h-0 opacity-0 py-0"
              : "max-h-[60px] opacity-100 py-2"
          }`}
          style={{
            background:
              "linear-gradient(90deg, rgba(140,60,0,0.96) 0%, rgba(200,85,0,0.95) 50%, rgba(255,122,0,0.94) 100%)",
            color: "#fffaf5",
            borderBottom: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 4px 24px rgba(140,60,0,0.28)",
          }}
        >
          <div className="flex gap-4 xl:gap-6 flex-wrap">
            {topActions.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`transition duration-300 hover:text-[#ff7a00] ${
                  item.name === "Donate" ? "text-[#ff7a00] font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center text-white">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* MAIN NAV */}
        <div
          className="pointer-events-auto transition-all duration-500"
          style={{
            background: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex justify-between items-center px-4 lg:px-8 xl:px-10 py-4">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-14" />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-5 text-[14px] font-medium">
              {menuItems.map((item, i) =>
                item.dropdown ? (
                  <li key={i} className="relative group">
                    <button className="text-[#ff7a00] pb-1 relative">
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ff7a00] group-hover:w-full transition-all"></span>
                    </button>

                    <div className="absolute left-0 top-full mt-4 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      {item.dropdown.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          className="block px-5 py-3 text-sm hover:bg-orange-50 hover:text-[#ff7a00]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="text-[#ff7a00] relative group pb-1"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ff7a00] group-hover:w-full transition-all"></span>
                    </Link>
                  </li>
                ),
              )}
            </ul>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-3xl text-[#1b1b1b]"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-full h-screen z-[9999] overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              style={{
                background:
                  "linear-gradient(135deg, #fff5eb 0%, #f7efe5 50%, #f8f2ea 100%)",
              }}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center p-5 border-b">
                <h2 className="text-xl font-bold text-[#ff7a00]">Menu</h2>
                <button onClick={() => setOpen(false)}>
                  <HiX size={28} />
                </button>
              </div>

              {/* MENU */}
              <div className="p-5">
                {menuItems.map((item, i) => (
                  <div key={i} className="border-b pb-2">
                    {item.dropdown ? (
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex justify-between py-3 text-lg"
                      >
                        {item.name}
                        <span>{mobileDropdown === item.name ? "−" : "+"}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="block py-3 text-lg"
                      >
                        {item.name}
                      </Link>
                    )}

                    {item.dropdown && mobileDropdown === item.name && (
                      <div className="pl-4 pb-3 flex flex-col gap-2">
                        {item.dropdown.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={sub.path}
                            onClick={() => setOpen(false)}
                            className="text-sm text-gray-600 hover:text-[#ff7a00]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* TOP ACTIONS */}
              <div className="border-t px-5 pt-5">
                {topActions.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* SOCIAL */}
              <div className="flex justify-center gap-6 py-10 text-2xl text-[#ff7a00]">
                {socials.map((social, i) => (
                  <a key={i} href={social.link}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
