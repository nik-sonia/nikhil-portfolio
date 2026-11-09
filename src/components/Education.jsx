import React from "react";

const education = [
  {
    degree: "Bachelor’s Degree in Hotel Management",
    year: "2018",
    school: "IPSIA CORNARO"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <h3 className="text-2xl font-bold mb-6">Education</h3>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-4">
          <h4 className="font-semibold text-lg">{edu.degree} – {edu.year}</h4>
          <p className="text-gray-700 dark:text-gray-300">{edu.school}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;