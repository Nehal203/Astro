import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import astroImg from "../assets/katha.svg";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, "")); 
    if (start === end) return;

    let incrementTime = Math.floor(duration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <motion.h3
      className="text-2xl font-bold"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {count}
      {target.replace(/[0-9]/g, "")} 
    </motion.h3>
  );
};

const AstrologySection = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="flex justify-center bg-gray-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={astroImg}
            alt="Astrology"
            className="rounded-lg shadow-lg max-w-full h-90"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            know about <span className="font-bold italic">Astrology</span>
          </h2>
          <div className="w-12 h-1 bg-red-500 mb-4"></div>

          <p className="text-black mb-4 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it esdehas a more-or-less normal
            distribution of letters,
          </p>
          <p className="text-black mb-6 leading-relaxed">
            As opposed to using 'Content here, content here', making it look
            like readable English. Many desktop publishing packages and web page
            editors sdesnow use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy.
          </p>

          <motion.button
            className="cursor-pointer bg-red-600 text-white px-5 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>

          <motion.div
            className="flex items-center gap-4 bg-red-100 border border-red-200 rounded-md px-4 py-3 max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center bg-white text-white rounded-full w-10 h-10">
              📞
            </div>
            <div>
              <p className="text-gray-600 text-sm">
                Contact Our Expert Astrologers
              </p>
              <p className="text-red-600 font-bold text-lg">+91 12345 5678</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
        {[
          { label: "PARTNER", value: "189+" },
          { label: "TEAMS", value: "322+" },
          { label: "HAPPY CLIENT", value: "98K+" },
          { label: "SERVICED", value: "112K+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-red-600 font-bold">{stat.label}</p>
            <Counter target={stat.value} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AstrologySection;
