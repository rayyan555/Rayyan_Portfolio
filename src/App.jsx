import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education"; // ✅ Import Education
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <div className="font-sans text-white bg-gradient-to-br from-gray-900 to-black scroll-smooth">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div> {/* ✅ Education Section */}
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="certifications"><Certifications /></div>
      <div id="contact"><Contact /></div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-center text-gray-400 py-4">
        © {new Date().getFullYear()} Rayyan A. All rights reserved.
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default App;
