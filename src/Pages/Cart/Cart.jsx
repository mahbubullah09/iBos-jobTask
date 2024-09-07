import  { useContext } from 'react';
import { CartContext } from '../../ContexApi/CartProvider';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  console.log(cart);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full p-4">
      {/* Cart Items */}
      <div className="w-full md:w-2/3 bg-gray-100 p-4 rounded-lg shadow-lg mb-6 md:mb-0">
        <h2 className="text-2xl font-semibold mb-4">An overview of your order</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.cartId} className="flex flex-col md:flex-row justify-between items-center py-4 border-b">
                <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">€{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center w-full md:w-auto justify-between">
                  <span className="border p-2 w-12 text-center">1</span>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    &times; {/* Remove item button */}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Order Details */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>€{getTotalPrice()}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Tax</p>
            <p>€0.00</p>
          </div>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <p>Total</p>
          <p>€{getTotalPrice()}</p>
        </div>
        <button className="w-full bg-black text-white p-4 mt-4 rounded-lg hover:bg-gray-800">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
