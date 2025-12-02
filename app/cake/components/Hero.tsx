"use client";
import { useState } from "react";
import { X } from "lucide-react"; // icons

export default function Hero() {
  const [orderModal, setOrderModal] = useState(false);

  const OrderModal = () => (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-fadeIn">
<div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-slideUp">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
            Order 
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
          {/* <textarea placeholder="Special Requests" rows="3" className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-pink-300 focus:outline-none focus:shadow-pink"></textarea> */}
          <button onClick={(e) => { e.preventDefault(); alert('Order submitted! We will contact you soon.'); setOrderModal(false); }} className="w-full bg-linear-to-r from-pink-400 to-pink-300 text-white py-3 rounded-full font-semibold hover:shadow-pink-glow transition-all duration-300 transform hover:scale-105">
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );

  return (
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Delight in Every Slice
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Order your dream cake for any occasion
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setOrderModal(true)} className="bg-[#E4A1A2] text-white px-8 py-4 rounded-full font-semibold hover:shadow-pink-glow transition-all duration-300 transform hover:scale-105">
                Order Now
              </button>
              <a href="#cakes" className="border-2 border-white bg-white text-[#E4A1A2] px-8 py-4 rounded-full font-semibold hover:bg-[#E4A1A2] hover:text-white hover:border-[#E4A1A2] transition-all duration-300 transform hover:scale-105">
                View Cakes
              </a>
            </div>
          </div>
          <div className="animate-fadeIn">
            <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800" alt="Beautiful Cake" className="rounded-3xl shadow-pink hover-scale w-full" />
          </div>
        </div>
        {orderModal && <OrderModal />}
      </section>
  );
}
