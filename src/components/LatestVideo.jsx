import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    thumbnail: "/images/video1.png",
  },
  {
    id: 2,
    thumbnail: "/images/video2.png",
  },
  {
    id: 3,
    thumbnail: "/images/video3.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LatestVideo = () => {
  return (
    <section className="py-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold relative inline-block"
      >
        Latest Video
        <span className="block w-20 h-[2px] bg-red-500 mx-auto mt-2 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-[6px] w-3 h-3 bg-red-500 rounded-full"></span>
        </span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center px-6 md:px-20"
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            variants={item}
            className="relative bg-black rounded-md overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={video.thumbnail}
              alt="video"
              className="w-full h-52 object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-6 h-6 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </div>

            <div className="absolute bottom-0 w-full bg-black bg-opacity-80 py-2 flex items-center justify-between px-3 text-white text-sm">
              <div className="flex-1 h-1 bg-gray-500 rounded-full mr-3">
                <div className="w-1/3 h-1 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex space-x-3 text-lg">
                <span>⏮</span>
                <span>⏯</span>
                <span>🔊</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          Watch More Video
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LatestVideo;
