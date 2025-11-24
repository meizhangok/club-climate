"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

const teamPhotos = [
  "46403A7E-8B15-4A13-B9C6-DBB6708FEDE4.jpg",
  "4555EC25-EEAF-4A61-B2FD-592CDF644F2A.jpg",
  "7CFDDE36-B2D0-48C3-8CBE-ADB4ED2BDA87.jpg",
  "4715736C-4F29-4DFD-8788-A813E6729EFF.jpg",
  "FA14217F-CF2E-4581-8A22-E7790D0AD903.jpg",
  "CF0D336D-7F15-497F-B528-A756FA8A1975.jpg",
  "688AB10F-CDD3-4565-A99D-E44A58384885.jpg",
  "77B8A978-E356-4866-9545-88441809C275.jpg",
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  
  const duplicatedPhotos = [...teamPhotos, ...teamPhotos, ...teamPhotos];

  useEffect(() => {
    if (isInView) {
      const totalWidth = (320 + 24) * teamPhotos.length; // width + gap
      controls.start({
        x: [-totalWidth, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 120,
            ease: "linear",
          },
        },
      });
    }
  }, [isInView, controls, teamPhotos.length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-climate-cream/30 to-white overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Community
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={controls}
              style={{ width: "max-content" }}
            >
              {duplicatedPhotos.map((photo, index) => (
                <div
                  key={`${photo}-${index}`}
                  className="relative w-80 h-80 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/Club Climate/${photo}`}
                    alt="Team members photos"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        
      </motion.div>
    </section>
  );
}
