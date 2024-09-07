import { useContext } from 'react';
import { CartContext } from '../../ContexApi/CartProvider';
import { IoIosInformationCircleOutline } from "react-icons/io";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    console.log(cart);

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between gap-10 w-full p-4 my-4">

            <div className="w-full md:w-2/3  rounded-lg md:mb-0">
                <h2 className="text-[28px] font-semibold mb-8">An overview of your order</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul className='bg-[#FAFAFA] p-4'>
                        {cart.map((item) => (
                            <li key={item.cartId} className=" py-4 border-b">
                                <div className='flex justify-between items-start'>
                                    <div className="flex items-start gap-4 w-full md:w-auto mb-4 md:mb-0">
                                        <img src={item.image} alt={item.name} className="w-[88px] h-[88px]  rounded-lg border " />

                                        <h3 className=" text-[#434343] font-bold">{item.name}</h3>


                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.cartId)}
                                        className="ml-4 text[12px] text-[#434343]"
                                    >
                                        &times;
                                    </button>
                                </div>


                                <p className="text-[#0E0E0E] text-[20px] font-semibold flex justify-end">€{item.price.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Order Details */}
            <div className="w-full md:w-1/3   ">
                <h2 className="text-[28px] font-semibold mb-8">Order Details</h2>
                <div className='bg-[#FAFAFA] text-[#656565] p-4'>
                    <div className="mb-4 ">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>€{getTotalPrice()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='flex items-center gap-2'>Estimated Tax <IoIosInformationCircleOutline /></p>
                            <p>€ -</p>
                        </div>
                    </div>
                    <div className="flex justify-between font-bold text-[24px]">
                        <p>Total</p>
                        <p className='text-[#0E0E0E]'>€{getTotalPrice()}</p>
                    </div>
                </div>
                <button className="w-full bg-black text-[#FFFFFF] text-[17px] font-medium  p-4 mt-4 rounded-lg ">
                    Go to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
