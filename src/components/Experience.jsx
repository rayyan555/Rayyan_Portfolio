import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Data Science Intern",
    company: "EduPhoenix Solutions Pvt Ltd, Bangalore",
    duration: "Jan 2024 – Feb 2024",
    details: [
      "Developed ML models with 95% accuracy improvement",
      "Created loan approval model using Naive Bayes (92%)",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Reccsar Private Limited, Madurai",
    duration: "Jan 2025 – Feb 2025",
    details: [
      "Built NLP chatbot improving response accuracy by 40%",
      "Worked with deep learning and neural networks",
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-gray-900 py-20 px-4 sm:px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center gap-3">
        <Briefcase className="w-8 h-8 text-blue-500 animate-pulse" />
        Experience
      </h2>

      {/* Glowing vertical timeline */}
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="hidden sm:block absolute left-1/2 w-1 bg-blue-500 rounded-full animate-glow z-0"
        />

        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`relative mb-12 flex flex-col items-center z-10 ${
              idx % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
            }`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Glowing Dot */}
            <div className="hidden sm:block w-6 h-6 bg-blue-500 rounded-full absolute left-1/2 -translate-x-1/2 top-2 shadow-[0_0_15px_rgba(59,130,246,0.9)] animate-pulse"></div>

            {/* Card */}
            <div className="bg-gray-800 text-left rounded-xl shadow-lg p-6 w-full sm:w-[45%] mx-4 transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
              <h3 className="text-xl text-white font-semibold">{exp.role}</h3>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
