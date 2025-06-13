import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BE Computer Science & Engineering",
    institution: "KPR Institute of Engineering and Technology, Coimbatore",
    year: "2022 - 2026",
    details: "CGPA: 8.43 / 10",
  },
  {
    degree: "Higher Secondary Education",
    institution: "PMGHSS",
    year: "2020 - 2022",
    details: "Percentage: 96.5%",
  },
  {
    degree: "Secondary Education",
    institution: "BMHSS",
    year: "2019 - 2020",
    details: "Percentage: 100%",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-gray-900 py-20 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-14 flex items-center justify-center gap-3">
        <GraduationCap className="w-8 h-8 text-blue-500" />
        Education
      </h2>

      <div className="relative max-w-4xl mx-auto border-l-4 border-blue-500 pl-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Timeline dot */}
            <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
              <GraduationCap className="w-4 h-4 text-white" />
            </span>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-blue-500 hover:shadow-blue-500/40 transition duration-300">
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
              <p className="text-blue-400 text-sm">{edu.year}</p>
              <p className="text-gray-300 mt-2">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
