import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Miles, Esther",
    location: "Delhi",
    image: "/images/user1.svg",
    text: "When looking at its layout. The point of using Lorem Ipsum is that it esdehas a more-or less normal distribution of letters.",
  },
  {
    id: 2,
    name: "Seema, Sharma",
    location: "Mumbai",
    image: "/images/user2.svg",
    text: "When looking at its layout. The point of using Lorem Ipsum is that it esdehas a more-or less normal distribution of letters.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials = () => {
  return (
    <section className="py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold"
      >
        What Our <span className="text-red-500">Customers Say</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-gray-500 mt-2 max-w-xl mx-auto"
      >
        When looking at its layout. The point of using Lorem Ipsum is that it
        esdehas a more-or less normal distribution of letters.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap justify-center gap-6"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            variants={item}
            className="bg-white shadow-md rounded-xl p-6 max-w-sm w-full relative"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto border-4 border-yellow-400 object-cover"
            />
            <div className="flex justify-center my-2 text-red-500">
              <Quote size={20} />
            </div>
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.location}</p>
            <p className="text-gray-600 mt-3">{t.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
