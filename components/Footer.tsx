"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="bg-climate-navy text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💌 Get Involved
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Come to our next book club meeting, or reach out to us to learn more about how you can get involved.
          </p>

          <div className="space-y-4 pt-8 flex justify-center">
          <iframe src="https://citrine-jonquil-017.notion.site/ebd/2ad89985ce7880c6879cfc038b7fc12e" width="500px" height="600px" allowFullScreen className="rounded-lg shadow-lg" />
          </div>

          <div className="pt-12 space-y-4">
            <p className="text-sm text-gray-400">
              Made with ❤️ by Mei Zhang, Ha Tran Nguyen Phuong, Beniamin Strzelecki, and Alex Chen. 
            </p>
            <p className="text-sm text-gray-400">
              Founded in 2023
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400"
        >
          <p>© 2025 Club Climate. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

