"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-climate-green transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">☀️</span>
              <span>Club Climate</span>
            </motion.button>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("mission")}
                className="text-gray-700 hover:text-climate-green font-medium transition-colors"
              >
                Who we are
              </button>
              <button
                onClick={() => scrollToSection("books")}
                className="text-gray-700 hover:text-climate-green font-medium transition-colors"
              >
                Books we read
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 bg-climate-green text-white rounded-full font-semibold hover:bg-climate-lightgreen transition-all duration-300 hover:scale-105"
              >
                Get Involved
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-900 hover:text-climate-green transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("mission")}
                className="block w-full text-left py-3 text-gray-700 hover:text-climate-green font-medium transition-colors border-b border-gray-200"
              >
                Who we are
              </button>
              <button
                onClick={() => scrollToSection("books")}
                className="block w-full text-left py-3 text-gray-700 hover:text-climate-green font-medium transition-colors border-b border-gray-200"
              >
                Books we read
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full px-6 py-3 bg-climate-green text-white rounded-full font-semibold hover:bg-climate-lightgreen transition-all duration-300 text-center"
              >
                Get Involved
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

