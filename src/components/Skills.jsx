import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCog,
  Database,
  LayoutDashboard,
  Zap,
} from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    icon: <Code2 className="h-8 w-8 text-blue-400" />,
    items: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "Machine Learning",
    icon: <BrainCog className="h-8 w-8 text-green-400" />,
    items: ["Scikit-learn", "TensorFlow", "NLP", "RAG"],
  },
  {
    title: "Data Tools & Visualization",
    icon: <LayoutDashboard className="h-8 w-8 text-yellow-400" />,
    items: ["Pandas", "Matplotlib", "Seaborn", "Tableau", "Power BI"],
  },
  {
    title: "Web Development",
    icon: <Zap className="h-8 w-8 text-pink-400" />,
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="h-8 w-8 text-purple-400" />,
    items: ["SQL", "NoSQL", "AWS", "Docker"],
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
  hidden: { opacity: 0, rotateY: -90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-gray-900 py-20 px-6 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-white mb-10 flex items-center justify-center gap-3">
        <Zap className="text-blue-500 w-8 h-8 animate-pulse" />
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="bg-gray-800 border border-blue-500 rounded-2xl p-6 shadow-lg text-left hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]"
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <ul className="text-gray-300 space-y-1">
              {skill.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
