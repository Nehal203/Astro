import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import zodiacWheel from "../assets/astrohome.png";

const slides = [
  {
    id: 1,
    title: "Read Your Daily Horoscope Today",
    subtitle: "What’s Your Sign ?",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse et gravida.",
    button: "READ MORE",
    image: zodiacWheel,
  },
  {
    id: 2,
    title: "Discover Love Compatibility",
    subtitle: "Find Your Match",
    description:
      "Check zodiac compatibility with your partner and explore deeper insights about your love life and relationships.",
    button: "READ MORE",
    image: zodiacWheel,
  },
  {
    id: 3,
    title: "Get Your Personal Horoscope",
    subtitle: "Daily Predictions",
    description:
      "Stay updated with daily astrology forecasts, planetary movements, and guidance tailored for your sign.",
    button: "READ MORE",
    image: zodiacWheel,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative text-white min-h-screen bg-red-600 flex items-center px-10 bg-cover bg-center overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition rounded-full shadow-lg z-10"
      >
        ◀
      </button>

      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition rounded-full shadow-lg z-10"
      >
        ▶
      </button>

      <div className="w-full h-full py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="space-y-6"
            >
              <h3 className="text-white text-xl font-semibold">
                {currentSlide.subtitle}
              </h3>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {currentSlide.title}
              </h1>
              <p className="text-gray-300 max-w-md">{currentSlide.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                {currentSlide.button}
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id + "-image"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <motion.img
                src={currentSlide.image}
                alt="Zodiac Wheel"
                className="w-[400px] md:w-[500px]"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10, 
                  ease: "linear",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Home;
