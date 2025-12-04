"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Where we work
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {['Department of Energy', 'Bain & Company', 'Citi', 'BloombergNEF', 'Google', 'Harris Walz', 'McKinsey & Company', 'Orsted', 'United Nations', 'Wren' ].map((company) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.1 }}
              whileHover={{ y: -8, scale: 1.05, opacity: 1 }}
              className="relative w-20 h-20 opacity-50 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={`/Club Climate/${company}.png`}
                alt={`Company ${company}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
          
        </div>
      </motion.div>
    </section>
  );
}

