
"use client"; // 👈 this tells Next.js it's a Client Component
import React from 'react';
import {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Heart, Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Nav from '../cake/components/Nav'
import Hero from '../cake/components/Hero'

const CakeWebsite = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const OrderModal = () => (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-fadeIn">
    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Order {selectedCake?.name}
              </h3>
              <button onClick={() => setOrderModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink" />
              <input type="tel" placeholder="Contact Number" className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink" />
              <input type="date" placeholder="Date Needed" className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink" />
              <select className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink">
                <option>Select Flavor</option>
                <option>Chocolate</option>
                <option>Vanilla</option>
                <option>Red Velvet</option>
                <option>Strawberry</option>
                <option>Custom</option>
              </select>
              <textarea placeholder="Special Requests" rows="3" className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink"></textarea>
              <button onClick={(e) => { e.preventDefault(); alert('Order submitted! We will contact you soon.'); setOrderModal(false); }} className="w-full bg-gradient-to-r from-pink-400 to-pink-300 text-white py-3 rounded-full font-semibold hover:shadow-pink-glow transition-all duration-300 transform hover:scale-105">
                Submit Order
              </button>
            </div>
          </div>
        </div>
      );
      
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cakes = [
    { id: 1, name: 'Birthday Delight', price: '₱1,500', image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500', category: 'Birthday' },
    { id: 2, name: 'Wedding Elegance', price: '₱5,000', image: 'https://images.unsplash.com/photo-1515363578674-99c5c2b0e2ee?w=500', category: 'Wedding' },
    { id: 3, name: 'Custom Creation', price: 'From ₱2,000', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500', category: 'Custom' },
    { id: 4, name: 'Cupcake Box', price: '₱800', image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500', category: 'Cupcakes' },
    { id: 5, name: 'Chocolate Dream', price: '₱1,800', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500', category: 'Specialty' },
    { id: 6, name: 'Floral Fantasy', price: '₱2,500', image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500', category: 'Custom' }
  ];

  const steps = [
    { icon: <ShoppingBag className="w-8 h-8" />, title: 'Choose Your Cake', desc: 'Browse our delicious collection' },
    { icon: <Heart className="w-8 h-8" />, title: 'Send Your Design', desc: 'Share your vision with us' },
    { icon: <Clock className="w-8 h-8" />, title: 'Confirm & Pay', desc: '50% downpayment required' },
    { icon: <MapPin className="w-8 h-8" />, title: 'Pick Up or Delivery', desc: 'Get your perfect cake!' }
  ];

  return (
    <div className="min-h-screen bg-[#F9E9EB]" style={{ fontFamily: 'Poppins, sans-serif' }}>
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

      <Nav />

      <Hero />

      {/* Cakes Section */}
      <section id="cakes" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Sweet Collection
          </h2>
          <p className="text-center text-gray-600 mb-12">Handcrafted with love for your special moments</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake, idx) => (
              <div key={cake.id} className="bg-[#F9E9EB] rounded-3xl overflow-hidden shadow-md hover-scale cursor-pointer" onClick={() => { setSelectedCake(cake); setOrderModal(true); }}>
                {/* <img src={cake.image} alt={cake.name} className="w-full h-64 object-cover" /> */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#E4A1A2] uppercase tracking-wide">{cake.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-1 text-gray-800">{cake.name}</h3>
                  <p className="text-2xl font-bold text-[#E4A1A2]">{cake.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section id="how-to-order" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
            How to Order
          </h2>
          <p className="text-center text-gray-600 mb-12">Your perfect cake in 4 simple steps</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-md hover-scale text-center">
                <div className="bg-[#F9E9EB] text-[#E4A1A2] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get in Touch
            </h2>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink" />
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink"></textarea>
              <button onClick={(e) => { e.preventDefault(); alert('Message sent! We will respond soon.'); }} className="bg-[#E4A1A2] text-white px-8 py-3 rounded-full font-semibold hover:shadow-pink-glow transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-[#E4A1A2]" />
                <span>+63 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-[#E4A1A2]" />
                <span>aprille@cakecreation.com</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="bg-[#F9E9EB] p-3 rounded-full hover:bg-[#E4A1A2] hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-[#F9E9EB] p-3 rounded-full hover:bg-[#E4A1A2] hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <img src="https://images.unsplash.com/photo-1515363778563-6a6d3f1c1f2f?w=800" alt="Bakery" className="rounded-3xl shadow-pink w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E4A1A2] text-white py-8 px-4 text-center">
        <p className="text-lg">© 2025 Aprilles Cake Creation – Made with Love</p>
      </footer>

      {orderModal && <OrderModal />}
    </div>
  );
};

export default CakeWebsite;