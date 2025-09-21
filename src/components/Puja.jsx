import React from "react";
import { motion } from "framer-motion";

const Puja = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/images/puja.svg"
        alt="Pandit Ji"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex items-center justify-end h-full">
        <motion.div
          className="text-right md:text-start max-w-2xl px-6 md:px-12"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl font-bold text-white leading-snug"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BOOK PANDITJI ONLINE ALL KINDS OF POOJA!
          </motion.h1>

          <motion.p
            className="text-white mt-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We Provide highly qualified and experienced panditji for all
            communities like Gujarati, Rajasthani, Marathi, Sindhi, Bihari,
            Bengali, and Punjabi.
          </motion.p>

          <motion.button
            className="mt-6 bg-white text-black px-6 py-3 rounded-full font-extrabold shadow hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            BOOK PANDIT
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Puja;
