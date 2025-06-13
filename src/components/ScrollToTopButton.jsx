// src/components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all duration-200 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;
