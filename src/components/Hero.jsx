import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  girl1,
  face1,
  face2,
  face3,
  face4,
  face5,
} from "../assets/assets";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.4 },
  },
};

const emojiFaces = [face1, face2, face3, face4, face5];

const Hero = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % emojiFaces.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-20 py-10 bg-black text-white"
    >
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between w-full">
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
            Hi, I'm{" "}
            <span className="text-pink-400 ml-2">Sakshi</span>
            <AnimatePresence mode="wait">
              <motion.img
                key={emojiIndex}
                src={emojiFaces[emojiIndex]}
                alt={`face${emojiIndex + 1}`}
                className="w-8 h-8"
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 45, scale: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed">
            I'm a passionate{" "}
            <span className="bg-gradient-to-r from-pink-700 via-pink-500 to-pink-300 bg-clip-text text-transparent">
              Web developer
            </span>{" "}
            who loves turning ideas into reality through{" "}
            <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 bg-clip-text text-transparent">
              code.
            </span>{" "}
            I specialize in building dynamic and responsive websites using the{" "}
            <span className="bg-gradient-to-r from-pink-700 via-pink-500 to-pink-300 bg-clip-text text-transparent">
              basic stack.
            </span>
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={girl1}
            alt="Sakshi"
            className="w-72 md:w-96 object-contain rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
