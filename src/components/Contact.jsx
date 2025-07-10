import React, { useState } from "react";
import { motion } from "framer-motion";
import { girl4 } from "../assets/assets";

const Contact = () => {
  const [focus, setFocus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
    setFocus("");
  };

  const inputVariant = {
    initial: { scale: 1 },
    focused: { scale: 1.05, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <section
      id="contact"
      className="bg-black text-white px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Form Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-700 via-pink-500 to-pink-300 bg-clip-text text-transparent mb-4">
          Contact Me
        </h2>

        {/* Name Field */}
        <motion.div
          className="bg-gradient-to-r from-pink-400 to-pink-100 rounded-full px-6 py-4 shadow-md"
          variants={inputVariant}
          animate={focus === "name" ? "focused" : "initial"}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onFocus={() => setFocus("name")}
            onBlur={() => setFocus("")}
            className="bg-transparent w-full outline-none text-black placeholder:text-pink-700 font-medium"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          className="bg-gradient-to-r from-pink-400 to-pink-100 rounded-full px-6 py-4 shadow-md"
          variants={inputVariant}
          animate={focus === "email" ? "focused" : "initial"}
        >
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            onFocus={() => setFocus("email")}
            onBlur={() => setFocus("")}
            className="bg-transparent w-full outline-none text-black placeholder:text-pink-700 font-medium"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          className="bg-gradient-to-r from-pink-400 to-pink-100 rounded-full px-6 py-4 shadow-md"
          variants={inputVariant}
          animate={focus === "message" ? "focused" : "initial"}
        >
          <textarea
            rows="3"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            onFocus={() => setFocus("message")}
            onBlur={() => setFocus("")}
            className="bg-transparent w-full outline-none resize-none text-black placeholder:text-pink-700 font-medium"
          />
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            className="bg-gradient-to-r from-pink-600 to-pink-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            onClick={() => alert("Message sent (functionality coming soon!)")}
          >
            Send
          </button>
          <button
            className="bg-gradient-to-r from-pink-300 to-pink-100 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            onClick={handleClear}
          >
            Discard
          </button>
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={girl4}
          alt="Contact"
          className="w-72 md:w-96 object-cover rounded-xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
