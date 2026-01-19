import React, { useState } from 'react';
import { Search, MapPin, Heart, ShoppingCart, User, ChevronDown, Phone, X, Menu } from 'lucide-react';
import logoImg from '../../assets/logo.jpg'; 
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export default function Navbar() {
  const { totalItems } = useCart(); // Get the real count from context
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pincode, setPincode] = useState("250001");

  const categories = ["Bakery", "Beverages", "Dairy", "Dals and Pulses", "Dry Fruits", "Fruits", "Vegetable", "Oils", "Staples", "Snacks", "Spices"];
  
  const concerns = [
    "Men's Health", "Women's Health", "Immunity Care", "Cough/Cold", "Respiratory Care", 
    "Nasal Congestion", "Pollution Care", "Joint Care", "Arthritis/Joint Pain", "Muscle Care", 
    "Metabolism Care", "Sleep Care", "Gut Care", "Bloating/Gas/Indigestion", "Constipation", 
    "IBS/IBD", "Colon Cleansing", "Gut Cleansing", "Liver/Kidney Care", "Loss of Appetite", 
    "Nutrition Supplements", "Anaemia", "Plant proteins", "Healthy cooking medium", 
    "Healthy sweetners", "Heart Care", "Cholestrol Care", "High Triglycerides", 
    "Hypertension Care", "Palpitations"
  ];

  const exploreItems = ["Our team", "FaQ", "Media", "Farm Updates", "Recipe"];

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full">
        {/* UPPER HEADER */}
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4">
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Search Bar - Hidden on small mobile, visible on tablet+ */}
          <div className="relative hidden md:block w-1/4 lg:w-1/3">
            <input 
              type="text" 
              placeholder="Search for products.." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-10 text-sm focus:outline-none focus:ring-1 focus:ring-brand-green"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>

          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0">
          <div className="flex items-center gap-2 flex-1 md:flex-none justify-center">
            <img src={logoImg} alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-5">
            <div 
              onClick={() => setShowLocationModal(true)}
              className="hidden sm:flex items-center gap-1 text-[10px] md:text-xs bg-gray-50 px-3 py-2 rounded-full border border-gray-200 cursor-pointer"
            >
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-brand-green" />
              <span className="hidden lg:inline">Deliver to</span> <span className="font-bold">{pincode}</span>
            </div>

            <Heart className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hidden sm:block" />
            
        <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-green text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/login"> 
            <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer" />
          </Link>
          </div>
        </div>

        {/* LOWER NAVIGATION - Desktop Only */}
        <nav className="hidden lg:flex max-w-7xl mx-auto px-4 py-2 items-center justify-between border-t border-gray-300 ">
          <div className="flex items-center gap-3">
            {/* Categories Dropdown */}
            <div className="group relative">
              <Link to="/products" className="bg-brand-green text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <Menu size={16}/> Browse All Categories  <ChevronDown size={12} />
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl border border-gray-100 py-2 rounded-b-xl">
                {categories.map(item => (
                  <a key={item} href="#" className="block px-4 py-2 text-xs font-bold uppercase hover:bg-gray-50 hover:text-brand-green">{item}</a>
                ))}
              </div>
            </div>
            {/* user */}
            {/* Concerns Dropdown */}
            <div className="group relative">
              <button className="bg-brand-green text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <Menu size={16}/> Browse By Concern <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-2 w-[400px] bg-white shadow-xl border border-gray-100 p-4 rounded-xl">
                {concerns.map(item => (
                  <a key={item} href="#" className="block px-2 py-1.5 text-[11px] font-medium hover:text-brand-green">{item}</a>
                ))}
              </div>
            </div>
          </div>

          <ul className="flex items-center gap-5 text-[13px] font-extrabold text-gray-600 tracking-tight">
            <li className="hover:text-brand-green cursor-pointer uppercase">Farming As A Service</li>
            <li className="hover:text-brand-green cursor-pointer uppercase">Lab Test Reports</li>
            <li className="hover:text-brand-green cursor-pointer uppercase">Store Locations</li>
            <li className="hover:text-brand-green cursor-pointer uppercase">Deals</li>
            <li className="group relative flex items-center gap-1 hover:text-brand-green cursor-pointer uppercase">
              Explore <ChevronDown size={12} />
              <div className="absolute top-full left-0 hidden group-hover:block w-40 bg-white shadow-lg border border-gray-100 py-2 rounded-lg mt-2">
                {exploreItems.map(item => (
                  <a key={item} href="#" className="block px-4 py-2 text-[11px] normal-case text-gray-700 hover:bg-gray-300">{item}</a>
                ))}
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-2 text-brand-green font-black text-xs">
            <Phone size={16} className="fill-brand-green text-white" />
            <span>+91 9590922000</span>
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-0 left-0 w-[80%] h-full bg-white p-6 overflow-y-auto slide-in-left">
            <div className="flex justify-between items-center mb-8">
               <img src={logoImg} className="h-8" alt="logo" />
               <X onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            {/* Mobile links here */}
            <div className="space-y-4 font-bold uppercase text-sm">
               <p className="text-brand-green border-b pb-2">All Categories</p>
               {categories.slice(0, 5).map(c => <p key={c} className="pl-4 text-gray-600">{c}</p>)}
               <p className="text-brand-green border-b pb-2 pt-4">Main Menu</p>
               <p>Deals</p>
               <p>Farming As A Service</p>
            </div>
          </div>
        </div>
      )}
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