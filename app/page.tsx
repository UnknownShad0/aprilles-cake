"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flavors from "./components/Flavors";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 ">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap');
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
          .animate-slideUp { animation: slideUp 0.5s ease-out; }
          .animate-slideDown { animation: slideDown 0.4s ease-out; }
          
          .shadow-pink { box-shadow: 0 4px 20px rgba(228, 161, 162, 0.3); }
          .shadow-pink-glow { box-shadow: 0 8px 30px rgba(228, 161, 162, 0.5); }
          .focus\\:shadow-pink:focus { box-shadow: 0 0 0 3px rgba(228, 161, 162, 0.3); }
          
          .hover-scale { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .hover-scale:hover { transform: scale(1.05); box-shadow: 0 15px 40px rgba(228, 161, 162, 0.3); }
        `}</style>
      <Navbar />
      <Hero />
      <Flavors />
      <HowItWorks />
      <Footer />
    </div>
    
  );
}
