// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    title: "Freelance Frontend Developer",
    company: "Self-employed",
    period: "2023 – Present",
    description:
      "Developed responsive web applications and landing pages for clients using React.js, Tailwind CSS, and Framer Motion.",
    icon: <Briefcase className="w-6 h-6 text-rose-600" />,
  },
];

const educationExperience = [
  {
    title: "Bachelor’s Degree in Hotel Management",
    company: "IPSIA CORNARO",
    period: "2018",
    description:
      "Graduated with a strong foundation in management and customer service, later transitioning into tech with web development skills.",
    icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
  },
];

const sectionTitleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const Experience = () => {
  return (
    <section className="py-16 bg-gray-50" id="experience">
      <div className="max-w-4xl mx-auto px-6">
        {/* Work Experience */}
        <motion.h2
          variants={sectionTitleVariant}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <div className="relative border-l-4 border-rose-600 mb-16">
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-white border-2 border-rose-600 rounded-full">
                {exp.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500">
                {exp.company} | {exp.period}
              </p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.h2
          variants={sectionTitleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        <div className="relative border-l-4 border-indigo-600">
          {educationExperience.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-white border-2 border-indigo-600 rounded-full">
                {edu.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.title}
              </h3>
              <p className="text-sm text-gray-500">
                {edu.company} | {edu.period}
              </p>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;