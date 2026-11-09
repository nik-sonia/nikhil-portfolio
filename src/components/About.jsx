import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-rose-50 via-white to-rose-100 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/40 shadow-xl rounded-2xl p-8 border border-rose-200"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-6">
            About Me
          </h2>
          <p className="text-lg font-serif leading-relaxed text-gray-700 mb-4">
            I am <span className="font-serif text-rose-500">Nikhil Sharma</span>
            , a motivated and detail-oriented{" "}
            <span className="font-semibold">Front-End Developer</span> with
            hands-on experience building responsive, user-friendly websites.
          </p>
          <p className="text-lg font-serif leading-relaxed text-gray-700 mb-4">
            Originally trained in Hotel Management, I bring strong
            organizational and client-focused skills into technology.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Certified in{" "}
            <span className="font-semibold">Meta Front-End Development</span>{" "}
            (Coursera),
            <span className="font-semibold"> Figma UX Design</span>, and
            <span className="font-semibold"> LinkedIn Learning</span>, Based in
            Munich, Germany Specialized in React & JavaScript Focus Business
            Websites Available Freelance Projects
          </p>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.img
            src="/images/Nikhil-2.svg" // change to your actual profile image path
            alt="Nikhil Sharma"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-rose-300"
            whileHover={{ scale: 1.05, rotate: -3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
