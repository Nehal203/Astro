import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Today's Panchangam",
    img: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
  },
  {
    title: "Free Kundali",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Kundali Matching",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  },
  {
    title: "Muhurta Selection",
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    title: "Career & Education Guidance",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  },
  {
    title: "Finance & Business Astrology",
    img: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
  },
  {
    title: "Health Astrology",
    img: "https://cdn-icons-png.flaticon.com/512/2966/2966487.png",
  },
  {
    title: "Relationship & Marriage Astrology",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077086.png",
  },
  {
    title: "Child Birth / Pregnancy Astrology",
    img: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
  },
  {
    title: "Vastu Astrology",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
  },
  {
    title: "Gemstone Recommendation",
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921820.png",
  },
  {
    title: "Mantra Jaap",
    img: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
];

const Box = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-10 px-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="hover:bg-gray-400 bg-white rounded-md p-4 flex flex-col items-center shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-12 h-12 bg-gray-100 rounded-full border-2 border-dashed mb-4 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-6 h-6 object-contain"
              />
            </motion.div>
            <p className="text-center text-sm font-semibold">{item.title}</p>
            <div className="w-12 h-[2px] bg-black mt-2"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md grid grid-cols-1 sm:grid-cols-2 gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="My Name is"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <select className="px-4 py-2 border border-gray-300 rounded">
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            type="date"
            defaultValue="2025-09-15"
            className="px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded">
            <option>+91(India)</option>
          </select>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="col-span-1 sm:col-span-2 px-4 py-2 border border-gray-300 rounded"
        />
        <div className="flex sm:col-span-2 justify-between">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-6 py-2 rounded ml-4"
          >
            Get Free Consultant
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Box;
