import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Ensure you're importing the uuidv4 function

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
 
    const productWithCartId = {
      ...product,
      cartId: uuidv4(),  
    };

    setCart([...cart, productWithCartId]);

    return { type: 'success', message: 'Product added to cart successfully!' };
  };

  const removeFromCart = (cartId) => {
    const updatedCart = cart.filter(item => item.cartId !== cartId);
    setCart(updatedCart);

   
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

export default CartProvider;
