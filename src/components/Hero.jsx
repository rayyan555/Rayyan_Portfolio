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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-24 bg-gray-900"
    >
      {/* Image Section with Smooth Flip */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-8 md:mb-0 md:mr-10"
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        <img
          src="/images/rayyan.jpg"
          alt="Rayyan A"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.6)]"
        />
      </motion.div>

      {/* Text Section */}
      <div className="max-w-xl">
        {/* Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-2"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeInUp}
        >
          Hi, I'm <span className="text-blue-400">Rayyan A</span>
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
            className="text-xl md:text-2xl font-medium text-blue-400 mb-4 block"
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
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
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
          problems. I bring expertise in{" "}
          <span className="font-semibold text-blue-400">
            Python, Java, React
          </span>{" "}
          and hands-on experience in
          <span className="text-blue-400"> Machine Learning, NLP, and Arising Technologies</span>.
          I'm driven by innovation, data, and purpose.
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
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition duration-300 flex items-center gap-2"
          >
            Explore More
            <ArrowDownCircle className="w-5 h-5" />
          </a>

          {/* Download Resume Button */}
          <a
            href="/Rayyan_Resume.pdf"
            download
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition duration-300 flex items-center gap-2"
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
