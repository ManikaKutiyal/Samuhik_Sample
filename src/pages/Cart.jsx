import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import Products from "./Products";
import { useState } from "react";

// Note: I'm adding a "mock" items array so you can see how it looks. 
// Once we build the Context, we will replace this.
const Cart = () => {
  // Mock data for UI testing
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  // Placeholder functions
  // const updateQuantity = () => {};
  // const removeFromCart = () => {};
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className=" flex flex-col bg-white">
      <main className="flex-1 max-w-7xl mx-auto py-8 sm:py-12 px-4 w-full">
        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center py-20  rounded-[40px] border border-dashed border-white"
          >
            <ShoppingCart className="mx-auto h-20 w-20 text-gray-800 mb-6" />
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-500 mb-8">Add some organic goodness to your life!</p>
            <Link to="/Products">
              <button className="bg-brand-green text-white px-10 py-4 rounded-[5px] shadow-lg hover:scale-105 transition-all">
                Continue Shopping
              </button>
            </Link>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <p className="text-gray-800 mb-2">Have an account?</p>
              <Link to="/login" className="text-brand-green font-bold hover:underline">
                Log in
              </Link>
              <span className="text-gray-800"> to check out faster.</span>
            </div>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                Your Cart ({totalItems} items)
              </h1>
              
              {items.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: index * 0.1 }} 
                  className="bg-white rounded-2xl p-5 flex gap-6 border border-gray-100 shadow-sm"
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-contain bg-gray-50 rounded-xl" />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg leading-tight">{item.name}</h3>
                      {item.variant && <p className="text-xs font-bold text-gray-400 uppercase mt-1">{item.variant}</p>}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-black text-xl text-gray-900">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">₹{item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="text-gray-300 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={20} />
                    </button>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-1 px-2 border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        className="p-1 hover:bg-white rounded-lg transition-all text-gray-600 shadow-sm"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center font-bold text-gray-800">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="p-1 hover:bg-white rounded-lg transition-all text-gray-600 shadow-sm"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-light rounded-[32px] p-8 sticky top-24 border border-brand-green/10">
                <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600 font-medium">
                    <span>Subtotal</span>
                    <span className="text-gray-900 font-bold">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-medium">
                    <span>Shipping</span>
                    <span className="text-brand-green font-bold uppercase text-xs tracking-widest">Free</span>
                  </div>
                  <div className="border-t border-brand-green/10 pt-4 flex justify-between items-center">
                    <span className="text-xl font-serif font-bold">Total</span>
                    <span className="text-2xl font-black text-brand-green">₹{totalPrice}</span>
                  </div>
                </div>
                
<button
  onClick={() => setShowPopup(true)}
  className="w-full bg-brand-green text-white font-bold mt-8 py-4 rounded-xl shadow-lg hover:bg-brand-green/90 transition-all flex items-center justify-center gap-2"
>
  Proceed to Checkout
</button>
                {showPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-3xl p-8 w-[90%] max-w-md text-center shadow-2xl"
    >
      <h3 className="text-2xl font-serif font-bold mb-3">
        Sorry!
      </h3>

      <p className="text-gray-600 mb-6">
        Checkout feature coming soon!  
        <br />
         Your cart will be saved.
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="bg-brand-green text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
      >
        Okay
      </button>
    </motion.div>
  </div>
)}

                <Link to="/" className="block text-center mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-brand-green">
                  ← Add more items
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
