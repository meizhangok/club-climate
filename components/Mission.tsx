"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-20 px-6 bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Who we are
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-xl md:text-2xl text-center font-medium">
            Club Climate is a community for ambitious climate professionals.
          </p>
          
          <p className="text-lg text-center">
          Founded in 2023, Club Climate brings together 30 young professionals across energy, business, technology, and policy. We meet twice monthly to work through challenging books on energy economics and grid infrastructure—but we're more than a book club. We're a community united by curiosity about climate solutions and committed to supporting each other as we build careers in this space.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

