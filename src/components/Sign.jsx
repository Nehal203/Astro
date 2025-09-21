import React from "react";
import { motion } from "framer-motion";

const zodiacSigns = [
  { name: "Aries", date: "21 Mar – 19 Apr", icon: "/images/sign1.png" },
  { name: "Taurus", date: "20 Apr – 20 May", icon: "/images/sign2.png" },
  { name: "Gemini", date: "21 May – 20 Jun", icon: "/images/sign3.png" },
  { name: "Cancer", date: "21 Jun – 22 Jul", icon: "/images/sign4.png" },
  { name: "Leo", date: "23 Jul – 22 Aug", icon: "/images/sign5.png" },
  { name: "Virgo", date: "23 Aug – 22 Sep", icon: "/images/sign1.png" },
  { name: "Libra", date: "23 Sep – 22 Oct", icon: "/images/sign6.png" },
  { name: "Scorpio", date: "23 Oct – 21 Nov", icon: "/images/sign7.png" },
  { name: "Sagittarius", date: "22 Nov – 21 Dec", icon: "/images/sign8.png" },
  { name: "Capricorn", date: "22 Dec – 19 Jan", icon: "/images/sign9.png" },
  { name: "Aquarius", date: "20 Jan – 18 Feb", icon: "/images/sign10.png" },
  { name: "Pisces", date: "19 Feb – 20 Mar", icon: "/images/sign11.png" },
];

const Sign = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-light mb-2"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Choose Your <span className="font-bold">Zodiac Sign</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Lorem ipsum dolor sit amet consectetur. Aliquam vel urna velit aliquam eget
        egestas. Nisi ultricies quam a sem.
      </motion.p>

      <motion.div
        className="relative w-40 h-[2px] bg-red-500 mx-auto my-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <motion.div
          className="absolute w-4 h-4 bg-white border-4 border-red-500 rounded-full left-1/2 -translate-x-1/2 -top-[10px]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        ></motion.div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={index}
            className="bg-white border-2 border-red-500 rounded-md overflow-hidden flex flex-col items-center shadow-sm hover:shadow-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={sign.icon}
              alt={sign.name}
              className="w-24 h-24 mt-6 mb-4"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            <div className="w-full bg-red-500 py-2">
              <h3 className="text-white text-lg font-semibold">{sign.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sign;
