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
          Who are we?
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-xl md:text-2xl text-center font-medium">
            Club Climate is a community for ambitious climate-interested professionals with a passion for learning and action.
          </p>
          
          <p className="text-lg text-center">
            Founded in 2023, our group is based in New York and meets twice a month to discuss books and news focused on climate change and the energy transition. What started as a casual meeting of friends from all walks of life turned into a tight-knit community of young professionals who share their knowledge and work experiences at the forefront of business, finance, technology, and science.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

