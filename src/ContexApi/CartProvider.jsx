import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);

    // Return success message
    return { type: 'success', message: 'Product added to cart successfully!' };
  };

  const removeFromCart = (productId) => {
    // Remove the product from the cart
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);

    // Return success or error message
    if (updatedCart.length < cart.length) {
      return { type: 'success', message: 'Product removed from cart successfully!' };
    } else {
      return { type: 'error', message: 'Product not found in cart!' };
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider
