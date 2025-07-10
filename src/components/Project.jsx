import React from "react";
import { motion } from "framer-motion";
import { project1, project2, eyes } from "../assets/assets";

const projects = [
  {
    title: "Online Pet Shop",
    image: project1,
    tech: ["HTML", "CSS", "JavaScript", "BootStrap"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white px-6 md:px-20 py-20">
      <h2 className="text-5xl font-bold text-center mb-16 flex justify-center items-center gap-4 bg-gradient-to-r from-pink-900 via-pink-500 to-pink-100 bg-clip-text text-transparent">
  Projects
  <video
    src={eyes}
    autoPlay
    loop
    muted
    playsInline
    className="w-15 h-15 rounded-full object-contain"
  />
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-pink-300">
              {project.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-pink-500 text-black shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
