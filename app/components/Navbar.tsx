"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons
import NavLogo from "../assets/nav-image/nav-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
      {/* Logo */}
      <motion.img
        src={NavLogo.src}
        alt="cake"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-60 md:w-80 mb-4 md:mb-0"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-[#e4a1a2] font-medium">
        <li><a href="#home" className="hover:text-pink-600">Home</a></li>
        <li><a href="#flavors" className="hover:text-pink-600">Menu</a></li>
        <li><a href="#how" className="hover:text-pink-600">How It Works</a></li>
        <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-pink-600 focus:outline-none z-50"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 text-[#e4a1a2] font-medium md:hidden"
          >
            <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Home</a></li>
            <li><a href="#flavors" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Menu</a></li>
            <li><a href="#how" onClick={() => setIsOpen(false)} className="hover:text-pink-600">How It Works</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
