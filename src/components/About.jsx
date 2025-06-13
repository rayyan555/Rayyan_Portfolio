import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-900 flex flex-col items-center"
    >
      {/* 🔹 About Me */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-800 rounded-2xl shadow-lg max-w-4xl p-10 border border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
      >
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          I’m <span className="text-white font-semibold">Rayyan A</span>, a passionate 
          <span className="text-blue-400 font-medium"> Computer Science and Engineering </span> 
          student specializing in 
          <span className="text-blue-400 font-medium"> Artificial Intelligence and Machine Learning </span> 
          at KPR Institute of Engineering and Technology.
          I thrive at the intersection of intelligent systems and impactful design, constantly exploring how emerging technologies can solve real-world challenges.
          <br /><br />
          With a strong foundation in <span className="text-blue-400 font-medium">Python</span>, <span className="text-blue-400 font-medium">Java</span>, and <span className="text-blue-400 font-medium">React.js</span>, I build scalable web applications and develop AI/ML models that drive data-centric decisions.
          I have hands-on experience in developing solutions involving Natural Language Processing, Deep Learning, and Predictive Modeling.
          <br /><br />
          I’m deeply motivated by continuous learning, innovation, and the opportunity to work on high-impact projects. My ultimate goal is to contribute to cutting-edge technology that improves lives and drives future transformation.
        </p>
      </motion.div>

      {/* 🔸 Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-white"
      >
        <div className="bg-gray-800 p-4 rounded-xl text-center shadow hover:shadow-blue-500/30 transition">
          <h3 className="text-3xl font-bold text-blue-400">5+</h3>
          <p className="text-sm mt-1 text-gray-300">Projects</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center shadow hover:shadow-blue-500/30 transition">
          <h3 className="text-3xl font-bold text-yellow-400">8+</h3>
          <p className="text-sm mt-1 text-gray-300">Certifications</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center shadow hover:shadow-blue-500/30 transition">
          <h3 className="text-3xl font-bold text-green-400">100+</h3>
          <p className="text-sm mt-1 text-gray-300">LeetCode Problems</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center shadow hover:shadow-blue-500/30 transition">
          <h3 className="text-3xl font-bold text-indigo-400">8.43</h3>
          <p className="text-sm mt-1 text-gray-300">CGPA</p>
        </div>
      </motion.div>

      {/* 💬 Glowing Quote with gray text and no box */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          textShadow: [
            "0px 0px 0px rgba(59,130,246,0)",
            "0px 0px 10px rgba(59,130,246,0.4)",
            "0px 0px 20px rgba(59,130,246,0.6)",
            "0px 0px 10px rgba(59,130,246,0.4)",
            "0px 0px 0px rgba(59,130,246,0)"
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        className="mt-12 text-center max-w-2xl text-lg italic text-gray-300 font-medium"
      >
        “I believe technology is most powerful when it's used to uplift, educate, and solve the real problems people face every day.”
      </motion.blockquote>
    </section>
  );
};

export default About;
