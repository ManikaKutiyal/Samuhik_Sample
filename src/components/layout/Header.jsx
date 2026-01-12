import React, { useState } from 'react';
import { Search, MapPin, Heart, ShoppingCart, User, ChevronDown, Phone, X } from 'lucide-react';

export default function Navbar() {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [pincode, setPincode] = useState("250001");

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        {/* UPPER HEADER: Search, Logo, Actions */}
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-1/3">
            <input 
              type="text" 
              placeholder="Search for products.." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 px-10 text-sm focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" /> {/* Add your logo to public/logo.png */}
            <div className="text-[10px] font-bold leading-tight uppercase text-gray-700">
               Samuhik<br/>Utthan<br/>Sewa Samiti
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            {/* Location Selector - Triggers Modal */}
            <div 
              onClick={() => setShowLocationModal(true)}
              className="flex items-center gap-1 text-xs bg-gray-50 px-3 py-2 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
            >
              <MapPin className="w-4 h-4 text-brand-green" />
              <span>Deliver to <span className="font-bold">{pincode}</span></span>
              <ChevronDown className="w-4 h-4" />
            </div>

            <Heart className="w-6 h-6 text-gray-600 cursor-pointer" />
            
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-brand-green text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
            </div>
            
            <User className="w-6 h-6 text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* LOWER NAVIGATION: Categories & Links */}
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center gap-3">
            {/* Category Buttons */}
            <button className="bg-brand-green text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-sm hover:bg-opacity-90">
              <span className="text-lg leading-none">☰</span> Browse All Categories
            </button>
            
            <button className="bg-[#B5CC6C] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-sm hover:bg-opacity-90">
              Browse By Concern <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Main Links */}
          <ul className="flex items-center gap-6 text-[13px] font-bold text-gray-600">
            <li className="hover:text-brand-green cursor-pointer uppercase">Farming As A Service</li>
            <li className="hover:text-brand-green cursor-pointer uppercase">Lab Test Reports</li>
            <li className="hover:text-brand-green cursor-pointer uppercase">Store Locations</li>
            <li className="hover:text-brand-green cursor-pointer uppercase">Deals</li>
            <li className="flex items-center gap-1 hover:text-brand-green cursor-pointer uppercase">
              Explore <ChevronDown className="w-4 h-4" />
            </li>
          </ul>

          {/* Contact */}
          <div className="flex items-center gap-2 text-brand-green font-extrabold text-sm">
            <Phone className="w-5 h-5 fill-brand-green text-white" />
            <span>+91 9590922000</span>
          </div>
        </nav>
      </header>

      {/* LOCATION POPUP MODAL */}
      {showLocationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
            <button 
              onClick={() => setShowLocationModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-xl font-bold mb-2">Select Delivery Location</h2>
            <p className="text-gray-500 text-sm mb-6">Enter your 6-digit pincode to check delivery availability and tax info.</p>
            
            <div className="space-y-4">
              <input 
                type="text" 
                maxLength={6}
                placeholder="Enter 6-digit Pincode"
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
                onChange={(e) => setPincode(e.target.value)}
              />
              <button 
                onClick={() => setShowLocationModal(false)}
                className="w-full bg-brand-green text-white font-bold py-3 rounded-xl hover:bg-opacity-90"
              >
                Apply & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}