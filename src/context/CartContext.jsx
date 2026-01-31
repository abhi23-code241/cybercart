import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cyber_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cyber_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    // Auth Check: Redirect if no user found [cite: 72-76]
    const user = localStorage.getItem('cyber_user');
    if (!user) {
      alert("Please Login or Signup to add items to your cart!");
      window.location.href = "/login";
      return;
    }

    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? {...item, qty: item.qty + quantity} : item);
      }
      return [...prev, { ...product, qty: quantity }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  
  const updateQty = (id, amount) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, amount) } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};