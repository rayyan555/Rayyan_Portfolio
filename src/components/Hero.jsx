import React from "react";
import { ArrowDownCircle, Download } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-24 bg-gray-900"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-10 md:mb-0 md:mr-10 flex-shrink-0 relative group"
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        {/* Glowing Background Behind Image */}
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30 z-0" />

        {/* Rotating Glow Ring */}
        <div className="absolute -inset-[12px] border-[6px] border-t-blue-400 border-r-blue-300 border-b-transparent border-l-transparent rounded-full animate-spin-slow z-0" />

        {/* Image */}
        <img
          src="/images/rayyan.jpg"
          alt="Rayyan A"
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover z-10 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        />
      </motion.div>

      {/* Text Section */}
      <div className="w-full max-w-2xl">
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeInUp}
        >
          <span className="text-blue-400">Rayyan A</span> —   Innovating With Purpose
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeInUp}
        >
          <TypeAnimation
            sequence={[
              "AI/ML Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "Data Scientist",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg sm:text-xl md:text-2xl font-medium text-blue-400 mb-5 block"
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start gap-6 mb-6"
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeInUp}
        >
          <a
            href="https://github.com/rayyan555"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rayyan-a-a46333217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/rayyan_88/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition text-2xl"
          >
            <FaCode />
          </a>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
          initial="hidden"
          animate="visible"
          custom={0.7}
          variants={fadeInUp}
        >
          A passionate{" "}
          <span className="text-blue-400 font-medium">
            AI/ML-focused Computer Science Engineer
          </span>{" "}
          dedicated to building intelligent systems that solve real-world
          problems. Skilled in{" "}
          <span className="font-semibold text-blue-400">Python, Java, React</span>{" "}
          and experienced in
          <span className="text-blue-400">
            {" "}
            Machine Learning, NLP, and Arising Technologies
          </span>
          .
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          initial="hidden"
          animate="visible"
          custom={0.9}
          variants={fadeInUp}
        >
          {/* Explore More Button */}
          <a
            href="#about"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition duration-300 flex items-center justify-center gap-2"
          >
            Explore More
            <ArrowDownCircle className="w-5 h-5" />
          </a>

          {/* Download Resume Button */}
          <a
            href="/Rayyan_Resume.pdf"
            download
            className="w-full sm:w-auto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition duration-300 flex items-center justify-center gap-2"
          >
            Download Resume
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
