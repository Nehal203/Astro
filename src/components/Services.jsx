import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Katha Reading",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui nunc volutpat sit odio nec fringilla purus natoque donec.",
    price: "$1200",
    image: "/images/katha.svg",
  },
  {
    title: "Plam Reading",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui nunc volutpat sit odio nec fringilla purus natoque donec.",
    price: "$1200",
    image: "/images/plam.svg",
  },
  {
    title: "Dayra",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui nunc volutpat sit odio nec fringilla purus natoque donec.",
    price: "$1200",
    image: "/images/dayra.svg",
  },
];

const Services = () => {
  return (
    <div className="bg-white py-14 px-4 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-light mb-2"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Most <span className="font-bold">Services</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Lorem ipsum dolor sit amet consectetur. Aliquam vel urna velit aliquam
        eget egestas. Nisl ultricies quam a sem. Nisl ultricies quam a sem. Nisl
        ultricies quam a sem. Nisl ultricies quam a sem. Nisl ultricies quam a
        sem.
      </motion.p>

      <motion.div
        className="relative w-40 h-[2px] bg-red-500 mx-auto my-5"
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="absolute bottom-0 left-0 bg-red-500 text-white px-4 py-1 font-semibold">
                {service.price}
              </span>
            </div>
            <div className="text-left p-4">
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <motion.a
                href="#"
                className="text-red-500 font-medium flex items-center gap-2 hover:underline"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Read More <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View All
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;
