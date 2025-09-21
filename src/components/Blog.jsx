import React from "react";
import { motion } from "framer-motion";
import blog from "../assets/Blog.svg";
import missionImg from "../assets/mission.svg";
import experienceIcon from "../assets/experience.svg";
import privacyIcon from "../assets/privacy.svg";
import supportIcon from "../assets/support.svg";
import membership from "../assets/membership.svg";

const Blog = () => {
    return (
        <div className="w-full bg-red-50 text-gray-800">

            <motion.div
                className="relative h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog})` }}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                    <h1 className="text-3xl font-bold">Blog</h1>
                    <p className="mt-2">Home &gt;&gt; Blog</p>
                </div>
            </motion.div>

            <section className="bg-red-50 py-12">
                <motion.h3
                    className="text-2xl font-bold text-center text-red-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Blog For You
                </motion.h3>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        { img: "/images/new1.svg", title: "The Art of Astrology Decoding the...", desc: "Malesuada velit sit pulvinar dictum in. Tortor nibh in faucibus varius." },
                        { img: "/images/new2.svg", title: "The Art of Astrology Decoding the...", desc: "Malesuada velit sit pulvinar dictum in. Tortor nibh in faucibus varius." },
                        { img: "/images/new3.svg", title: "The Art of Astrology Decoding the...", desc: "Malesuada velit sit pulvinar dictum in. Tortor nibh in faucibus varius." },
                        { img: "/images/new4.svg", title: "The Art of Astrology Decoding the...", desc: "Malesuada velit sit pulvinar dictum in. Tortor nibh in faucibus varius." },
                    ].map((blogItem, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-4 rounded-xl shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img
                                src={blogItem.img}
                                alt={`Blog ${i + 1}`}
                                className="w-48 h-32 object-cover rounded-lg"
                            />
                            <div>
                                <h4 className="text-red-600 font-semibold text-lg">{blogItem.title}</h4>
                                <p className="mt-2 text-black text-sm">{blogItem.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-red-50 py-12 text-center">
                <motion.h3
                    className="text-2xl font-bold text-red-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose Astrology
                </motion.h3>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[ 
                        { img: experienceIcon, title: "Great Experience", desc: "Melisodao velit sit pulvinar dictum in tortor nibh in faucibus varius." },
                        { img: privacyIcon, title: "Data Privacy", desc: "Melisodao velit sit pulvinar dictum in tortor nibh in faucibus varius." },
                        { img: supportIcon, title: "Best Customer Support", desc: "Melisodao velit sit pulvinar dictum in tortor nibh in faucibus varius." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img src={item.img} alt={item.title} className="w-16 h-16" />
                            <h4 className="mt-4 text-red-600 font-semibold text-lg">{item.title}</h4>
                            <p className="mt-2 text-black text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <motion.section
                className="bg-gray-100 py-12 text-center bg-cover relative bg-center"
                style={{ backgroundImage: `url(${membership})` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl font-bold text-white">Let’s Become Membership</h3>
                <p className="mt-4 max-w-2xl mx-auto text-white">
                    Lorem ipsum dolor sit amet consectetur. Diam massa quis malesuada
                    tortor arcu consectetur habitasse. Maecenas adipiscing erat mauris sem
                    felis interdum in nulla.
                </p>
                <motion.button
                    className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-red-700 hover:text-white cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </motion.section>
        </div>
    );
};

export default Blog;
