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

// import ScrollProgress from "./ScrollProgress";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "About Us", path: "/about-us" },
    { name: "Events", path: "/events-page" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Entrepreneurship", path: "/entrepreneurship" },
    { name: "StartUp", path: "/startuppage" },
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
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Hide top bar after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <ScrollProgress /> */}

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[999] pointer-events-none">
        {/* TOP BAR */}
        <div
          className={`hidden lg:flex justify-between items-center px-4 xl:px-10 text-sm overflow-hidden transition-all duration-500 pointer-events-auto ${
            hideTopBar
              ? "max-h-0 opacity-0 py-0"
              : "max-h-[60px] opacity-100 py-2"
          }`}
          style={{
            // background:
            //   "linear-gradient(90deg, rgba(27,27,27,0.92), rgba(34,34,34,0.88))",
            // color: "#f8f2ea",
            // borderBottom: "1px solid rgba(255,255,255,0.08)",
            // boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
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

          <div className="flex gap-4 items-center text-[#ffff]">
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
            boxShadow: `
              0 8px 32px rgba(0,0,0,0.06),
              0 4px 20px rgba(255,122,0,0.08)
            `,
          }}
        >
          <div className="flex justify-between items-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-4">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="MySBA Logo"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </Link>

            {/* DESKTOP MENU */}
            {/* <ul className="hidden lg:flex items-center gap-3 xl:gap-5 text-[13px] xl:text-[14px] font-medium">
              {menuItems.map((item, i) => {
                const active = location.pathname.startsWith(item.path);

                return (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className={`relative transition-colors duration-300 ${
                        active
                          ? "text-[#ff7a00] font-semibold"
                          : "text-[#222] hover:text-[#ff7a00]"
                      }`}
                    >
                      {item.name}

                      {active && (
                        <span
                          className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full"
                          style={{
                            background: "#ff7a00",
                            boxShadow: "0 0 10px rgba(255,122,0,0.35)",
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul> */}
            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-3 xl:gap-5 text-[13px] xl:text-[14px] font-medium">
              {menuItems.map((item, i) => {
                const active = location.pathname.startsWith(item.path);

                return (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className={`group relative pb-1 transition-all duration-300 ${
                        active
                          ? "text-[#ff7a00] font-semibold"
                          : "text-[#ff7a00]"
                      }`}
                    >
                      {item.name}

                      {/* UNDERLINE */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                        style={{
                          background: "#ff7a00",
                          boxShadow: "0 0 10px rgba(255,122,0,0.35)",
                        }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-3xl text-[#1b1b1b]"
              aria-label="Open menu"
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
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-screen z-[9999] overflow-y-auto"
              style={{
                background:
                  "linear-gradient(135deg, #fff5eb 0%, #f7efe5 50%, #f8f2ea 100%)",
              }}
            >
              {/* DRAWER HEADER */}
              <div className="flex justify-between items-center p-5 border-b border-[#f5d8ba]">
                <h2 className="text-xl font-bold text-[#ff7a00]">Menu</h2>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-[#1b1b1b]"
                >
                  <HiX size={28} />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col p-5 gap-4">
                {menuItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="border-b border-[#f5d8ba] pb-3 text-lg text-[#222] hover:text-[#ff7a00] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* TOP ACTIONS */}
              <div className="border-t border-[#f5d8ba] px-5 pt-5">
                {topActions.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 transition ${
                      item.name === "Donate"
                        ? "text-[#ff7a00] font-bold"
                        : "text-[#222] hover:text-[#ff7a00]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-6 py-10 text-[#ff7a00] text-2xl">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
