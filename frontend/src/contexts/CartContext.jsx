import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext(undefined);

const API_URL = "http://localhost:5000/api/cart";

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // load cart on app start
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(API_URL);
      setItems(res.data.items); // ✅ FIX
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };

  const addToCart = async (item) => {
    try {
      const res = await axios.post(`${API_URL}/add`, item);
      setItems(res.data.items); // ✅ FIX
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      const res = await axios.put(`${API_URL}/update`, {
        id,
        quantity,
      });
      setItems(res.data.items); // ✅ FIX
    } catch (err) {
      console.error("Update quantity failed", err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      setItems(res.data.items); // ✅ FIX
    } catch (err) {
      console.error("Remove from cart failed", err);
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
