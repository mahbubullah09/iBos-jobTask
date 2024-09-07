import { useContext, useState } from "react";
import { ProductContext } from "../../ContexApi/ProductProvider";
import ProductCard from "./components/productCard";
import { CartContext } from "../../ContexApi/CartProvider";


const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState('rocking chair');

    const { product } = useContext(ProductContext)


    const filteredProducts = Array.isArray(product)
    ? product.filter(
        (product) => product.category === selectedCategory
    )
    : [];

    const {cart} = useContext(CartContext)

    console.log(cart);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row my-12">
            {/* Sidebar */}
            <div className="lg:w-1/5 w-full bg-white p-4 border-r shadow-lg lg:shadow-none">
               
                <ul className="space-y-2">
                    <li>
                        <button
                            className={`w-full text-left py-2 px-4 ${selectedCategory === 'rocking chair' ? 'bg-[#0E0E0E] text-[18px] font-medium rounded-lg text-white' : 'text-[18px] font-medium text-[#717171]'
                                }`}
                            onClick={() => setSelectedCategory('rocking chair')}
                        >
                            Rocking Chair
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left py-2 px-4 ${selectedCategory === 'side chair' ? 'bg-[#0E0E0E] text-[18px] font-medium rounded-lg text-white' : 'text-[18px] font-medium text-[#717171]'
                                }`}
                            onClick={() => setSelectedCategory('side chair')}
                        >
                            Side Chair
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left py-2 px-4 ${selectedCategory === 'lounge chair' ? 'bg-[#0E0E0E] text-[18px] font-medium rounded-lg text-white' : 'text-[18px] font-medium text-[#717171]'
                                }`}
                            onClick={() => setSelectedCategory('lounge chair')}
                        >
                            Lounge Chair
                        </button>
                    </li>
                </ul>
            </div>

            {/* Product Grid */}
            <div className="lg:w-4/5 w-full p-4">
               

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => <ProductCard key={index} product={product}/> ) }
                </div>
            </div>
        </div>
    );
};

export default Home;