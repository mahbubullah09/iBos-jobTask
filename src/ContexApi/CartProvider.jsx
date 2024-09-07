import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from './AuthProvider';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    if (user) {
      const savedCart = JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
      setCart(savedCart);
    }
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (product) => {
    if (!user) {
      return { success: false, message: 'Please Login before add to cart!' };
    }

    const productWithCartId = {
      ...product,
      cartId: uuidv4(),
      user: user.email
    };

    const productExists = cart.some(item => item.cartId === productWithCartId.cartId);

    if (productExists) {
      return { success: false, message: 'Product already in cart!' };
    }

    const updatedCart = [...cart, productWithCartId];
    setCart(updatedCart);

    return { success: true, message: 'Product added to cart successfully!' };
  };

  const removeFromCart = (cartId) => {
    if (!user) {
      return { success: false, message: 'User not authenticated!' };
    }

    const updatedCart = cart.filter(item => item.cartId !== cartId);

    if (updatedCart.length === cart.length) {
      return { success: false, message: 'Product not found in cart!' };
    }

    setCart(updatedCart);

    return { success: true, message: 'Product removed from cart successfully!' };
  };

  // only current user can acces his/her items
  const getUserCart = () => {
    if (!user) {
      return [];
    }
    return cart;
  };

  return (
    <CartContext.Provider value={{ cart: getUserCart(), addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
