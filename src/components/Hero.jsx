import React from "react";
import { motion } from "framer-motion";
import { AuroraBackgroundDemo } from "./aurora-background";

const Hero = () => {
  return (
    // <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-red-500 via-red-700 to-yellow-500">
      
    //   {/* Background animated circles */}
    //   <motion.div
    //     className="absolute w-96 h-96 bg-white rounded-full opacity-20 animate-bounce-slow"
    //     style={{ top: "10%", left: "5%" }}
    //     animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
    //     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    //   />
    //   <motion.div
    //     className="absolute w-72 h-72 bg-white rounded-full opacity-15 animate-pulse-slow"
    //     style={{ bottom: "15%", right: "10%" }}
    //     animate={{ scale: [1, 1.2, 1] }}
    //     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    //   />

    //   {/* Hero Text */}
    //   <motion.div
    //     className="text-center z-10 px-4"
    //     initial={{ opacity: 0, y: -50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 1 }}
    //   >
    //     <motion.h1
    //       className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white drop-shadow-lg"
    //       initial={{ scale: 0.8, rotate: -5 }}
    //       animate={{ scale: 1, rotate: 0 }}
    //       transition={{ duration: 1, type: "spring", stiffness: 100 }}
    //     >
    //       Nikhil Sharma
    //     </motion.h1>

    //     <motion.p
    //       className="mt-4 text-xl sm:text-2xl text-white font-medium drop-shadow-md"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 0.5, duration: 1 }}
    //     >
    //       Front-End Developer | React.js | Tailwind CSS | Figma UX Design
    //     </motion.p>
    //   </motion.div>
    // </section>
    <AuroraBackgroundDemo />
  );
};

export default Hero;