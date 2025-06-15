import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const rect = homeSection?.getBoundingClientRect();
      if (!rect || rect.bottom <= 80) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <h1
          className="text-xl font-bold text-blue-400 cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        >
          Portfolio
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                spy={true}
                offset={-80}
                duration={250} // Faster scroll
                activeClass="text-blue-400 border-b-2 border-blue-400"
                className="cursor-pointer text-white hover:text-blue-400 transition font-medium pb-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="block md:block relative z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 transition duration-200 ${
          isOpen ? "block bg-black bg-opacity-40 backdrop-blur-sm" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-20 right-4 w-60 bg-gray-900 border border-blue-500 rounded-xl shadow-xl z-40 max-h-[70vh] overflow-y-auto transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        }`}
      >
        <ul className="flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.id} className="px-4 py-2 rounded transition-all duration-200">
              <Link
                to={item.id}
                smooth={true}
                spy={true}
                offset={-80}
                duration={250} // Faster scroll
                onClick={() => setIsOpen(false)}
                activeClass="!bg-gray-800 !text-blue-400"
                className="block text-white text-base cursor-pointer rounded hover:bg-gray-800 hover:text-blue-400 active:bg-gray-800 active:text-blue-400 focus:bg-gray-800 focus:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
