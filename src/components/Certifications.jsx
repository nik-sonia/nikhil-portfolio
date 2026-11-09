// src/components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Front-End Development",
    issuer: "Coursera",
    year: "2023",
    description:
      "Completed coursework covering HTML, CSS, JavaScript, and React fundamentals.",
    link: "#", // replace with certificate link
  },
  {
    title: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    year: "2023",
    description:
      "Learned advanced React concepts, hooks, and building reusable components.",
    link: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
    description:
      "Built multiple responsive projects applying modern CSS and accessibility best practices.",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b   to-gray-800 text-white"
      id="certifications"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 tracking-wide"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-md">
            Certifications
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-rose-600 pl-6 space-y-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card with icon inside */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-rose-600 backdrop-blur-md p-6 rounded-2xl shadow-lg border  hover:border-amber-500 hover:shadow-amber-500/30 transition-all duration-300"
              >
                {/* Icon inside card */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-md group-hover:rotate-6 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl text-gray-800 font-semibold group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-800 mb-2">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-gray-800 text-sm">{cert.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;