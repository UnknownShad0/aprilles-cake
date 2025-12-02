"use client";

import { motion } from "framer-motion";

export default function Flavors() {
  const flavors = [
    "Chocolate Moist",
    "Chocolate Chiffon",
    "Ube Chiffon",
    "Strawberry Chiffon",
    "Vanilla Chiffon",
    "Mocha Chiffon",
  ];

  return (
    <section id="flavors" className="px-6 md:px-16 py-16 bg-white">
      <h3 className="text-3xl  text-center text-sea- mb-10 -rotate-6">
        Our Cake Flavors
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {flavors.map((flavor, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-pink-100 p-6 rounded-2xl shadow hover:shadow-lg text-center"
          >
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/6383/6383532.png"
              alt="flavor"
              className="w-20 mx-auto mb-4"
            />
            <h4 className=" text-lg text-pink-800">{flavor}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
