import React from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/about.svg";
import missionImg from "../assets/mission.svg";
import experienceIcon from "../assets/experience.svg";
import privacyIcon from "../assets/privacy.svg";
import supportIcon from "../assets/support.svg";
import membership from "../assets/membership.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="w-full bg-red-50 text-gray-800">
      <div
        className="relative h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-2"
          >
            Home &gt;&gt; About Us
          </motion.p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-200 h-full w-full rounded-lg flex items-center justify-center overflow-hidden"
        >
          <img
            src={missionImg}
            alt="Welcome"
            className="h-full w-full object-contain rounded-lg"
          />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-red-600">
            Welcome to <span className="text-black">Astrology</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Aliquet platea quam nulla
            viverra sed vestibulum nulla sollicitudin ridiculus sagittis. Nunc
            aliquam adipiscing duis urna sed orci felis. Quam eu euismod nullam
            augue nibh iaculis velit aliquam metus nisi enim bibendum.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Viverra nulla nec natoque habitasse. Vestibulum habitant in et
            imperdiet lorem non magna lacus pharetra. Non nibh porttitor nec ac
            pulvinar lorem. Lectus ullamcorper nisi nisi mattis quam eu faucibus.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-red-600">Our Mission</h3>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Diam massa quis malesuada
            tortor arcu consectetur habitasse. Maecenas adipiscing erat mauris
            sem felis interdum in nulla.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-red-600">Our Vision</h3>
          <ul className="mt-3 text-gray-600 space-y-2 list-disc list-inside">
            <li>Spread Ancient Wisdom</li>
            <li>Guide with Clarity</li>
            <li>Promote Positivity</li>
            <li>Preserve Tradition</li>
            <li>Support Every Individual</li>
            <li>Build Trust</li>
          </ul>
        </motion.div>
      </section>

      <section className="bg-red-50 py-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-red-600"
        >
          Why Choose Astrology
        </motion.h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[ 
            { icon: experienceIcon, title: "Great Experience" },
            { icon: privacyIcon, title: "Data Privacy" },
            { icon: supportIcon, title: "Best Customer Support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
              <h4 className="mt-4 text-red-600 font-semibold text-lg">
                {item.title}
              </h4>
              <p className="mt-2 text-black text-sm">
                Melisodao velit sit pulvinar dictum in tortor nibh in faucibus
                varius.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="bg-gray-100 py-12 text-center bg-cover relative bg-center"
        style={{ backgroundImage: `url(${membership})` }}
      >
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          Let’s Become Membership
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-white"
        >
          Lorem ipsum dolor sit amet consectetur. Diam massa quis malesuada
          tortor arcu consectetur habitasse. Maecenas adipiscing erat mauris sem
          felis interdum in nulla.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-red-700 hover:text-white cursor-pointer"
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default About;
