"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons
import NavLogo from "../../assets/nav-image/nav-logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

  return (
      <nav className={`fixed w-full bg-white z-40 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
          <div>
            <a href="#">
                <motion.img
                  src={NavLogo.src}
                  alt="cake"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-25 md:w-45 mb-4 md:mb-0"
                />
            </a>

          </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Cakes', 'How to Order', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-700 hover:text-[#E4A1A2] transition-colors duration-300 font-medium">
                  {item}
                </a>
              ))}
            </div>
            
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <div className="md:hidden bg-[#E4A1A2] animate-slideDown">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Cakes', 'How to Order', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg transition-all" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
  );
}
