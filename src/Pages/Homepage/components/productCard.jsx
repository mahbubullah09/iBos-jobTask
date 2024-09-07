import React, { useContext } from 'react';
import { PiHandbagSimpleBold } from 'react-icons/pi';
import { CartContext } from '../../../ContexApi/CartProvider';
import { AuthContext } from '../../../ContexApi/AuthProvider';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const {user} =useContext(AuthContext)

  const handleAddToCart = () => {
    const result = addToCart(product, user?.email);
    if (result.success) {
      toast.success(result.message);
  } else {
      toast.error(result.message);
  }
  };

  return (
    <div className="bg-white max-w-[280px] mx-auto p-4 border border-[#F1F1F1] rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-[236px]  bg-[#F2F2F2] mx-auto   mb-4 rounded"
      />
      <h3 className="text-[18px] font-semibold text-[#343434]">{product?.name}</h3>
      <p className="text-[#838383] text-[14px] font-normal mb-2">{product?.dt}</p>
      <div className='flex justify-between items-center'>
        <p className="text-[#343434] text-[18px] font-bold">€{product?.price.toFixed(2)}</p>
        <p className="text-[#ABABAB] text-[18px] font-medium">
          €{product?.previous_price.toFixed(2)}
        </p>
        <p className="text-[#B92E2E] text-[18px] font-semibold">
          30% OFF
        </p>
      </div>
      <button 
        className="w-full flex items-center justify-center gap-3 text-[16px] font-semibold mt-4 bg-[#202020] text-white py-2 rounded-md"
        onClick={handleAddToCart} 
      >
        <PiHandbagSimpleBold /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
