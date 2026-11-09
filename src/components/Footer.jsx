// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#9F191A] text-white py-10 mt-20 overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-rose-800 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-rose-600 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center px-4">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-wide mb-4"
        >
          Let’s Connect 🚀
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg"
        >
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 hover:text-rose-300 transition"
          >
            <Mail size={20} />ns09.sharma25@gmail.com
          </a>
          <a
            href="tel:+49015510070389"
            className="flex items-center gap-2 hover:text-rose-300 transition"
          >
            <Phone size={20} /> +49 0155 10070389
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-6 mt-6"
        >
          <a
            href="https://github.com/nik-sonia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Github size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-sharma-703ba5316"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin size={26} />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8 text-sm opacity-80"
        >
          © {new Date().getFullYear()} Nikhil Sharma. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;