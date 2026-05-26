import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSend } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      },
    );
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // Reset form
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center px-4 py-16 bg-[#f8f2ea] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba] opacity-80" />

      {/* Glow Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ff7a00] opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#ff7a00] opacity-20 blur-3xl rounded-full" />

      {/* Content */}
      <div
        ref={sectionRef}
        className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg border border-white/40 w-fit mb-6"
          >
            {/* GLOWING DOT */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-5 h-5 rounded-full bg-[#ff7a00]/40 animate-ping"></span>

              <span className="relative w-3 h-3 rounded-full bg-[#ff7a00] shadow-[0_0_15px_#ff7a00]"></span>
            </div>

            <p className="text-sm font-semibold tracking-wide text-[#444] uppercase">
              Contact Us
            </p>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-[#1b1b1b] leading-tight">
            Let’s Build Something{" "}
            <span className="text-[#ff7a00]">Amazing</span>
          </h1>

          <p className="mt-5 text-[#555] text-lg leading-relaxed">
            Have a project in mind? Drop a message and let’s create something
            powerful together. We respond quickly and love collaboration.
          </p>

          <div className="mt-8 space-y-2 text-[#666] text-sm">
            <p>📍 Based on modern React & animation stack</p>
            <p>⚡ Fast response within 24 hours</p>
            <p>🚀 Professional UI/UX focused development</p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-[#1b1b1b] mb-6">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7a00]"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7a00]"
              required
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7a00]"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7a00]"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#ff7a00] hover:bg-orange-600 text-white font-medium py-3 rounded-xl shadow-lg shadow-orange-300 transition-all duration-300"
            >
              Send Message
              <FiSend />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
