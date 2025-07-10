import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  homeIcon,
  aboutIcon,
  projectsIcon,
  contactIcon,
} from "../assets/assets";

const name = "Sakshi";

const letterVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.4,
    },
  }),
};

const navLinks = [
  { name: "Home", icon: homeIcon, href: "#home" },
  { name: "About", icon: aboutIcon, href: "#about" },
  { name: "Projects", icon: projectsIcon, href: "#projects" },
  { name: "Contact", icon: contactIcon, href: "#contact" },
];

const Navbar = () => {
  const [cycle, setCycle] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 mt-4 w-full">
      <nav
  className="bg-gradient-to-r from-pink-400 via-pink-200 to-pink-100
  text-purple-500 px-8 py-5 flex justify-between items-center
  rounded-full shadow-xl backdrop-blur-md bg-opacity-70 border border-pink-300 w-full"
>
  <div className="flex items-center gap-6">
    {/* Animated Logo */}
    <div className="text-3xl font-extrabold font-serif tracking-wider text-black h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={cycle}
          className="flex"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  {/* Nav Links */}
  <ul className="flex gap-8 items-center">
    {navLinks.map((link, index) => (
      <li key={index}>
        <a
          href={link.href}
          className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-200 text-lg font-medium"
        >
          <img src={link.icon} alt={link.name} className="w-6 h-6" />
          <span className="hidden sm:inline">{link.name}</span>
        </a>
      </li>
    ))}
  </ul>
</nav>

    </div>
  );
};

export default Navbar;
