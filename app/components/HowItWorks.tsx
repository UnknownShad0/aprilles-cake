"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "1️⃣",
      title: "Fill Out the Form",
      desc: "Provide your cake details, size, flavor, and dedication.",
    },
    {
      step: "2️⃣",
      title: "Send Downpayment",
      desc: "Secure your order with a 50% downpayment via GCash or bank.",
    },
    {
      step: "3️⃣",
      title: "Wait for Confirmation",
      desc: "You’ll receive a message once your order is approved and confirmed!",
    },
  ];

  return (
    <section id="how" className="px-6 md:px-16 py-16 bg-pink-50">
      <h3 className="text-3xl  text-center text-pink-700 mb-10">
        How It Works
      </h3>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow text-pink-800"
          >
            <h4 className="text-2xl mb-2">{item.step}</h4>
            <h5 className="mb-2">{item.title}</h5>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
