import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { book, food, music, college } from "../assets/assets";

// Interest Data
const interests = [
  {
    title: "Problem Solving",
    image: book,
    description:
      "Problem-solving sparks my creativity and shows how one challenge can have many solutions—just like life. It’s helped me grow from basics to advanced logic using C, C++, and Python.",
  },
  {
    title: "Languages",
    image: food,
    description:
      "I began with Python, solving basics using its clean syntax. Then came C, where I learned speed and memory handling. Now in C++, I'm exploring OOP concepts—tough at first, but the journey's going great!",
  },
  {
    title: "Web Development",
    image: music,
    description:
      "With a dream of becoming a full-stack developer, I started with HTML, CSS, and JavaScript—building strong frontend basics. Now, I'm diving into React, exploring component-based architecture, and leveling up with tools like Node.js, Express, MongoDB, and more.",
  },
  {
    title: "College Life",
    image: college,
    description:
      "I’m currently in my 3rd semester of B.E. CSE, exploring core subjects like Internet of Things, Embedded Systems, C++, and DBMS. I’m also gaining hands-on experience with SQL—and yeah, things are going pretty great!",
  },
];

// Animation for fade-in of each interest item
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// Animated Title Component
const AnimatedHeading = ({ title }) => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, 3000); // 2s visible, 1s gap
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.h3
        key={cycle}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8,
        }}
        className="text-2xl font-semibold text-pink-300 mb-3"
      >
        {title}
      </motion.h3>
    </AnimatePresence>
  );
};

// Main About Component
const About = () => {
  return (
    <section id="about" className="bg-black text-white px-6 md:px-20 py-16">
      <h2 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-pink-800 via-pink-400 to-pink-200 bg-clip-text text-transparent">
        Points of Interest
      </h2>

      <div className="space-y-16">
        {interests.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            {/* Text Block */}
            <div className="md:w-1/2 text-center md:text-left">
              <AnimatedHeading title={item.title} />
              <p className="text-lg text-gray-300">{item.description}</p>
            </div>

            {/* Image Block */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-72 h-72 object-cover rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
