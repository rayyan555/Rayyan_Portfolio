import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react"; // Icon for heading

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

const Projects = () => {
  const centerIndex = Math.floor(projects.length / 2);

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-900 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center gap-3">
        <LayoutDashboard className="w-8 h-8 text-blue-500 animate-pulse" />
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => {
          let initial = { opacity: 0 };
          if (idx < centerIndex) {
            initial.x = -100;
          } else if (idx > centerIndex) {
            initial.x = 100;
          } else {
            initial.scale = 0.8;
          }

          return (
            <motion.div
              key={idx}
              initial={initial}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-blue-500 rounded-2xl shadow-xl p-6 will-change-transform transition-transform duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] text-left"
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
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
