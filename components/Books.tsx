"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const pastBooks = [
  {
    image: "/Club Climate/image 18.png",
    title: "The price is wrong",
    author: "Brett Christopher",
    description: "Why LCoE is the wrong metric for evaluating renewable energy costs, and the role of subsidies in the energy transition.",
    href: "https://www.versobooks.com/products/3069-the-price-is-wrong",
  },
  {
    image: "/Club Climate/image 19.png",
    title: "This changes everything",
    author: "Naomi Klein",
    description: "The issue of climate change requires a fundamental rethinking of our economic structure for a livable future for all.",
    href: "https://www.amazon.com/This-Changes-Everything-Capitalism-Climate/dp/1451697392",
  },
  {
    image: "/Club Climate/image 20.png",
    title: "The Grid",
    author: "Gretchen Bakke",
    description: "How intermittency from renewable energy sources represent new 21st challenges for a grid built in the 20th century.",
    href: "https://www.amazon.com/Grid-Fraying-Between-Americans-Energy/dp/1608196100"
  }
];

const currentBook = {
  image: "/Club Climate/image 21.png",
  title: "Taming the sun",
  author: "Varun Sivaram", href: "https://www.amazon.com/Taming-Sun-Innovations-Harness-Energy/dp/0262037688"
};

const nextBooks = [
  { title: "Moral Ambition", author: "Rutger Bregman", href: "https://www.amazon.com/Moral-Ambition-Wasting-Talent-Difference/dp/031658035X",
   },
  { title: "Energy and Civilization", author: "Vaclav Smil", href: "https://www.amazon.com/Energy-Civilization-History-MIT-Press/dp/0262536161" },
  { title: "The New Map: Energy, Climate and The clash of Nation", author: "Daniel Yergin", href: "https://www.amazon.com/New-Map-Energy-Climate-Nations/dp/1594206430" },
  { title: "Future of Energy Reading List", author: "Casey Handmer", href: "https://caseyhandmer.wordpress.com/2023/10/19/future-of-energy-reading-list/" },
];

export default function Books() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="books" className="py-20 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Past Books
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pastBooks.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.1 }}
                whileHover={{ y: -8 }}
                className="space-y-4 cursor-pointer"
              >
                <div className="relative w-full h-96 rounded-lg overflow-hidden  bg-white flex items-center justify-center p-4 transition-shadow duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900">{book.title}</h3>
                  <p className="text-md text-gray-700">by {book.author}</p>
                  <p className="text-gray-600 italic text-sm leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Currently Reading
          </h3>
          
          <motion.div 
            className="flex flex-col items-center space-y-4"
            whileHover={{ y: -8 }}
          >
            <div className="relative w-64 h-96 rounded-lg overflow-hidden bg-white flex items-center justify-center p-4 transition-all duration-300 cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src={currentBook.image}
                  alt={currentBook.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-gray-900">{currentBook.title}</h3>
              <p className="text-lg text-gray-700">by {currentBook.author}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Next Up
          </h3>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {nextBooks.map((book, index) => (
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="p-4 bg-climate-cream/30 rounded-lg hover:bg-climate-cream/50 transition-colors duration-300"
            >
              <a
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-climate-green hover:text-climate-lightgreen transition-colors"
              >
                {book.title}
              </a>
              <p className="text-gray-600">by {book.author}</p>
            </motion.div>
            ))}
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
