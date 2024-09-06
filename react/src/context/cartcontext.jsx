import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addPizza = (pizza) => {
    setCartItems((prevItems) => {
      const existingPizza = prevItems.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prevItems.map(item =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item );
      } else {
        return [...prevItems, { ...pizza, count: 1 }];
      }
    });
  };

  const increasePizza = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item => item.id === id ? { ...item, count: item.count + 1 } : item ));
  };

  const decreasePizza = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item => item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item ));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addPizza, increasePizza, decreasePizza, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
