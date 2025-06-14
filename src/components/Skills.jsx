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

const flipCardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  show: (i = 0) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-gray-900 py-20 px-4 sm:px-6 text-center"
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      viewport={{ once: false, amount: 0.2 }} // Animate on both scroll directions
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-10 flex items-center justify-center gap-3"
        variants={flipCardVariants}
      >
        <Zap className="text-blue-500 w-8 h-8 animate-pulse" />
        Skills
      </motion.h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Vertical animated lines */}
        <motion.div
          className="hidden sm:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-blue-500 animate-pulse opacity-20"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden lg:block absolute left-[33.3%] top-0 h-full w-0.5 bg-gradient-to-b from-green-400 via-green-300 to-green-400 animate-pulse opacity-20"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden lg:block absolute left-[66.6%] top-0 h-full w-0.5 bg-gradient-to-b from-pink-400 via-pink-300 to-pink-400 animate-pulse opacity-20"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
        />

        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={flipCardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="bg-gray-800 border border-blue-500 rounded-2xl p-6 shadow-lg text-left hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] relative z-10"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {skill.title}
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm sm:text-base text-center sm:text-left">
              {skill.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
