"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const headlines = [
  "Build climate expertise.",
  "Solve new problems.",
  "Make new friends.",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-climate-cream via-white to-climate-sky/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
          ☀️ New York, NY
          </h3>
        </motion.div>

        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-center"
              >
                <span className={currentIndex === headlines.length - 1 ? "gradient-text" : ""}>
                  {headlines[currentIndex]}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >              We are a <strong>tight-knit community</strong> of <strong>climate professionals</strong> working in business, finance, technology, and science, and thinking about the future of climate and energy. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-climate-green text-white rounded-full font-semibold hover:bg-climate-lightgreen transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Involved
          </a>
          <a
            href="#mission"
            className="px-8 py-4 bg-white text-climate-green border-2 border-climate-green rounded-full font-semibold hover:bg-climate-cream transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            className="w-6 h-6 text-climate-green"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

