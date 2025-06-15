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
    <section
      id="education"
      className="bg-gray-900 py-16 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
        <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
        Education
      </h2>

      <div className="relative max-w-5xl mx-auto pl-6 sm:pl-8">
        {/* Vertical glowing line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.2)] z-0"
        />

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
            className="relative mb-12 z-10"
          >
            {/* Glowing dot */}
            <span className="absolute -left-[1.15rem] sm:-left-5 top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.9)] animate-pulse">
              <GraduationCap className="w-4 h-4 text-white" />
            </span>

            {/* Project-style card */}
            <div
              className="bg-gray-800 border border-blue-500 rounded-2xl p-6 shadow-lg text-left hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] transition duration-300 w-full sm:w-[95%] lg:w-[90%]"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <h3 className="text-2xl text-white font-bold mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-blue-400 text-sm mb-2">{edu.year}</p>
              <p className="text-gray-400 text-sm">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
