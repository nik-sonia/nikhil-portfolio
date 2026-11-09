import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ResumeButton from "./Resumebutton";
const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 shadow-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* 🔥 Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="relative flex items-center justify-center h-12 w-12 md:h-14 md:w-14 cursor-pointer"
        >
          <motion.img
            src="/images/Nikhil-3.svg"
            alt="Nikhil Sharma Logo"
            className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full object-contain drop-shadow-xl"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* 🌐 Desktop Navigation */}
        <>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-800 dark:text-gray-100 font-serif group text-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                {link}
                {/* Gradient underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-rose-500 via-red-500 to-orange-400 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </motion.a>
            ))}
          </nav>
          <ResumeButton/>
        </>
        {/* 📱 Mobile Menu Button */}
        <div className="md:hidden text-gray-700 dark:text-gray-100 cursor-pointer z-50">
          {menuOpen ? (
            <X className="w-7 h-7" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="w-7 h-7" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-2xl border-t border-white/10"
        >
          <ul className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link, idx) => (
              <motion.li
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 * idx,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 dark:text-gray-100 font-serif"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
