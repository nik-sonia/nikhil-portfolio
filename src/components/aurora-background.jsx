// import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
// export function AuroraBackgroundDemo() {
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//       >
//         {/* Small Intro */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="uppercase tracking-widest text-sm md:text-lg text-rose-500 dark:text-rose-400"
//         >
//           👋 Hello, I’m
//         </motion.p>

//         {/* Gradient Name */}
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//           className="text-4xl md:text-7xl font-bold text-center bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 bg-clip-text text-transparent"
//         >
//           Nikhil Sharma
//         </motion.h1>

//         {/* Typing Effect */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           className="font-light text-base md:text-3xl dark:text-neutral-200 text-center"
//         >
//           <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-rose-500 pr-2 animate-typing">
//             Front-End Developer | React.js | Tailwind CSS | Figma
//           </span>
//         </motion.div>

//         {/* CTA Button */}
//         <a
//           href="#contact"
//           className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 mt-6 cursor-pointer hover:scale-105 transition transform shadow-lg"
//         >
//           Hire Me
//         </a>
//       </motion.div>
//     </AuroraBackground>
//   );
// }

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 -bottom-15"
      >
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 md:px-8">
          {/* Name */}
          <h1 className="font-serif text-xl  uppercase leading-[1.1] tracking-[0.08em] text-neutral-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Nikhil <span className="text-neutral-500">Sharma</span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 max-w-3xl text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-neutral-600 dark:text-neutral-300 sm:text-lg md:text-2xl md:tracking-[0.25em]">
            Frontend & Full-Stack
            <span className="block mt-1 text-neutral-400">Web Developer</span>
          </h2>

          {/* Accent line */}
          <div className="mt-7 h-1 w-16 rounded-full bg-neutral-900 dark:bg-white" />

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base font-light leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg md:text-xl">
            I build modern, responsive websites and web applications that help
            businesses create a strong digital presence.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-neutral-400 px-8 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-900"
            >
              Let's Talk
            </a>
          </div>
        </div>

        
       
      </motion.div>
    </AuroraBackground>
  );
}
