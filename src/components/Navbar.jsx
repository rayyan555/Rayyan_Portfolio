import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" }, // ✅ Added Education
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Portfolio</h1>

        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                activeClass="text-blue-400 border-b-2 border-blue-400"
                className="cursor-pointer text-white hover:text-blue-400 transition font-medium pb-1"
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
