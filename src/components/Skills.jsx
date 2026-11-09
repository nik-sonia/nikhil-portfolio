
import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma 
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Skills with logo + description
const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-2xl" />,
    desc: "Building structured and semantic web pages."
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
    desc: "Styling responsive and modern layouts."
  },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJs className="text-yellow-400 text-2xl" />,
    desc: "Adding interactivity and logic to websites."
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400 text-2xl" />,
    desc: "Creating fast, reusable, component-based UIs."
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
    desc: "Utility-first styling for rapid UI development."
  },
  {
    name: "Framer Motion",
    icon: <SiVercel className="text-pink-400 text-2xl" />,
    desc: "Smooth animations and micro-interactions."
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-2xl" />,
    desc: "Backend development with JavaScript runtime."
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-2xl" />,
    desc: "Building REST APIs and server-side apps."
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500 text-2xl" />,
    desc: "Version control and project collaboration."
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-2xl" />,
    desc: "Hosting and managing code repositories."
  },
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-400 text-2xl" />,
    desc: "Lightweight IDE for efficient coding."
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-500 text-2xl" />,
    desc: "Designing modern UI/UX prototypes."
  },
  {
    name: "Responsive Design",
    icon: <FaCss3Alt className="text-teal-300 text-2xl" />,
    desc: "Optimizing websites for all screen sizes."
  },
  {
    name: "REST APIs",
    icon: <FaNodeJs className="text-green-400 text-2xl" />,
    desc: "Connecting frontend with backend data."
  }
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-r from-[#1a1c2c] via-[#3b1d47] to-[#6d1b3b] text-center text-white"
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] animate-pulse"></div>

      <h3 className="relative text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] tracking-wide">
        Technical Skills
      </h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto text-base md:text-lg text-gray-200 mb-10 px-4"
      >
        Here are the technologies and tools I’ve worked with to build responsive, 
        interactive, and high-quality web applications.
      </motion.p>

      <motion.div
        className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,77,109,0.1)" }}
            className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 
                       backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            {skill.icon}
            <div className="text-left">
              <h4 className="text-lg font-semibold">{skill.name}</h4>
              <p className="text-sm text-gray-300">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;