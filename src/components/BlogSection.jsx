import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    date: "November 2023",
    title: "The Astrology of Success",
    description: "The Astrology of Success",
    image: "/images/blog1.svg",
  },
  {
    id: 2,
    date: "November 2023",
    title: "A Celestial Guide to Managing Stress and Anxiety",
    description: "A Celestial Guide to Managing Stress and Anxiety",
    image: "/images/blog2.svg",
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

const BlogSection = () => {
  return (
    <section className="py-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold"
      >
        Our <span className="text-red-500">Blog</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20"
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={item}
            className="text-center bg-white shadow-md rounded-2xl p-4"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-3xl w-full h-104 object-cover"
            />
            <p className="mt-3 text-gray-500">{blog.date}</p>
            <h3 className="font-semibold text-lg">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
            <a
              href="#"
              className="mt-3 inline-block border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Read Article
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogSection;
