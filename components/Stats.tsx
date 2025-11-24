"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "30+", label: "Active Members", extra: null },
  { 
    number: "15+", 
    label: "Countries Represented",
    extra: "🇺🇸 🇵🇱 🇻🇳 🇨🇦 🇮🇳 🇹🇼 🇬🇧 🇭🇰 🇧🇪 🇨🇳 🇯🇵 🇫🇷 🇩🇴 🇰🇷 🇵🇭"
  },
  { number: "2x", label: "Monthly Meetings", extra: null },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-climate-green to-climate-lightgreen" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-lg md:text-xl text-climate-cream font-medium mb-3">
                {stat.label}
              </p>
              {stat.extra && (
                <p className="text-base md:text-lg text-white/90 mt-2">
                  {stat.extra}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

