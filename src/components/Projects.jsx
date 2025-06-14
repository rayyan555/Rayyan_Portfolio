import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";

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
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-gray-900 py-20 px-6 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center gap-3">
        <LayoutDashboard className="w-8 h-8 text-blue-500 animate-pulse" />
        Projects
      </h2>

      <motion.div
        className="flex flex-wrap justify-center items-stretch gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {projects.map((project, idx) => (
          <React.Fragment key={idx}>
            {/* Project Card */}
            <motion.div
              custom={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="bg-gray-800 border border-blue-500 rounded-2xl p-6 shadow-lg text-left w-full sm:w-[45%] lg:w-[30%] hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl text-white font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition duration-300"
              >
                GitHub
              </a>
            </motion.div>

            {/* Vertical Animated Line Between Cards */}
            {idx < projects.length - 1 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "300px", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-1 sm:block hidden bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-pulse"
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
