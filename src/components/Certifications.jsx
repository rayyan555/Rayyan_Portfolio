import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, BookOpen, Award } from "lucide-react";

const flipInY = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: (i = 0) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const certifications = [
  {
    title: "Natural Language Processing",
    issuer: "NPTEL",
    year: "2025",
    icon: <BookOpen className="text-blue-400 w-6 h-6" />,
    image: "/certificates/nlp.png",
  },
  {
    title: "Learning Analytics Tools",
    issuer: "NPTEL",
    year: "2024",
    icon: <BookOpen className="text-blue-400 w-6 h-6" />,
    image: "/certificates/learning_analytics.png",
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    year: "2024",
    icon: <BookOpen className="text-blue-400 w-6 h-6" />,
    image: "/certificates/data_analytics_python.png",
  },
  {
    title: "Data Science Fundamentals",
    issuer: "IBM",
    year: "June 2023",
    icon: <BadgeCheck className="text-blue-400 w-6 h-6" />,
    image: "/certificates/data_science_ibm.png",
  },
  {
    title: "Introduction to NoSQL Databases",
    issuer: "IBM",
    year: "Oct 2023",
    icon: <BadgeCheck className="text-blue-400 w-6 h-6" />,
    image: "/certificates/nosql_ibm.png",
  },
  {
    title: "Data Visualization with Tableau",
    issuer: "UC Davis",
    year: "Sep 2023",
    icon: <GraduationCap className="text-green-400 w-6 h-6" />,
    image: "/certificates/tableau_ucdavis.png",
  },
  {
    title: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Microsoft",
    year: "Sep 2023",
    icon: <GraduationCap className="text-indigo-400 w-6 h-6" />,
    image: "/certificates/excel_microsoft.png",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "Jul 2024",
    icon: <GraduationCap className="text-indigo-400 w-6 h-6" />,
    image: "/certificates/generative_ai.png",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.section
      id="certifications"
      className="bg-gray-900 py-20 px-6 text-center"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-12 flex items-center justify-center gap-3"
        variants={flipInY}
      >
        <Award className="w-8 h-8 text-yellow-400 animate-pulse" />
        Certifications
      </motion.h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Colored animated vertical lines */}
        <motion.div
          className="hidden sm:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-30"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden lg:block absolute left-[33.3%] top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-30"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden lg:block absolute left-[66.6%] top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-30"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />

        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-md text-left cursor-pointer relative z-10"
            custom={idx}
            variants={flipInY}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            onClick={() => setSelectedCert(cert)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59,130,246,0.4)",
              transition: { duration: 0.2 },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {cert.icon}
              <div>
                <h3 className="text-white font-semibold text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4">
          <div className="relative bg-gray-900 p-4 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:from-blue-500 hover:to-blue-700 transition"
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[70vh] rounded-lg object-contain mx-auto"
            />
            <p className="text-white mt-4 text-center font-medium">
              {selectedCert.title}
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Certifications;
