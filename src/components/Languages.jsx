// src/components/Languages.jsx
import React from "react";
import { motion } from "framer-motion";
import { Globe, Languages as LangIcon } from "lucide-react";

const languages = [
  { name: "English", level: "Professional", proficiency: 95 },
  { name: "German", level: "Intermediate", proficiency: 70 },
  { name: "Hindi", level: "Native", proficiency: 100 },
];

const Languages = () => {
  return (
    <section
      id="languages"
      className="py-20 bg-gradient-to-b text-white relative overflow-hidden"
    >
      {/* Floating gradient circles in background */}
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl animate-ping"></div> */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 tracking-wide flex items-center justify-center gap-3"
        >
          <LangIcon className="w-10 h-10 text-rose-500 animate-spin-slow" />
          <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent drop-shadow-md">
            Languages
          </span>
        </motion.h2>

        {/* Languages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, y: -5 }}
              className=" backdrop-blur-md p-6 rounded-2xl shadow-xl border  hover:border-rose-500 hover:shadow-rose-500/40 transition-all duration-500 flex flex-col items-start relative overflow-hidden text-slate-900"
            >
              {/* Glow Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Icon */}
              <Globe className="w-8 h-8 text-rose-400 mb-3 animate-bounce" />

              {/* Language Name */}
              <h3 className="text-2xl font-bold mb-1">{lang.name}</h3>
              <p className="text-sm text-gray-900 mb-5">{lang.level}</p>

              {/* Progress Bar */}
              <div className="w-full  rounded-full h-3 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                  className="h-3 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 relative"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-0 left-0 h-full w-1/3 bg-white/20 blur-sm"
                  />
                </motion.div>
              </div>

              {/* Percentage */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.4, duration: 0.8 }}
                className="mt-3 text-sm font-medium text-rose-400"
              >
                {lang.proficiency}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;