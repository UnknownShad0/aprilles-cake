"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24"
    >
      <div className="max-w-lg">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl  text-pink-700 mb-4"
        >
          Sweet Treats, Baked with Love 💕
        </motion.h2>
        <p className="text-lg text-gray-700 mb-6">
          Reserve your dream cake today! Custom designs, delicious flavors, and
          love in every bite.
        </p>
        <a
          href="#flavors"
          className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
        >
          Order Now
        </a>
      </div>


    </section>
  );
}
