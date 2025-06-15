import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Github } from "lucide-react";

const projects = [
  {
    title: "MediSense – AI Medical Assistant",
    tech: ["React", "Python", "NLP", "RAG"],
    description:
      "AI-powered chatbot with medical query resolution and report summarization. Achieved 90% response accuracy.",
    github: "https://github.com/rayyan555/Medical-Chatbot",
  },
  {
    title: "Loan Approval Prediction",
    tech: ["Python", "Streamlit", "Naive Bayes"],
    description:
      "ML model to predict loan approvals with 92% accuracy. Built with Streamlit for an interactive experience.",
    github: "https://github.com/rayyan555/LOAN-_APPROVAL_WITH_UI",
  },
  {
    title: "TEDXplore – TED Talks Recommender",
    tech: ["Python", "TF-IDF", "Streamlit"],
    description:
      "Content-based TED Talk recommendation system using NLP. Delivers smart suggestions using cosine similarity.",
    github:
      "https://github.com/rayyan555/TEDXplore-AI-Powered-TED-Talks-Recommendation-System",
  },
  {
    title: "Face Mask Detection using CNN",
    tech: ["Python", "OpenCV", "TensorFlow"],
    description:
      "Implemented CNN-based real-time face mask detection using computer vision and deep learning. Deployed with OpenCV GUI.",
    github: "https://github.com/rayyan555/Face-Mask-Detection-uing-CNN",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-gray-900 py-20 px-4 sm:px-8 text-center"
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-white mb-16 flex items-center justify-center gap-3">
        <LayoutDashboard className="w-8 h-8 text-blue-500 animate-pulse" />
        Projects
      </h2>

      <div className="relative flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {/* Vertical glowing lines like Certifications */}
        <motion.div
          className="hidden sm:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden lg:block absolute left-[33.3%] top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden lg:block absolute left-[66.6%] top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />

        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="bg-gray-800/80 backdrop-blur-md border border-blue-500 rounded-3xl shadow-[0_0_25px_rgba(59,130,246,0.3)] p-6 w-full sm:w-[46%] lg:w-[30%] text-left hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition duration-300 relative z-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <Github className="w-5 h-5 text-pink-500" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {project.title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full border border-white/10 shadow-inner shadow-blue-800/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md hover:brightness-110 transition duration-300"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
