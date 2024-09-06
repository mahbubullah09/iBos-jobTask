import { useContext, useState } from "react";
import { ProductContext } from "../../ContexApi/ProductProvider";
import ProductCard from "./components/productCard";


const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState('rocking chair');

    const { product } = useContext(ProductContext)
    console.log(product);

    const filteredProducts = Array.isArray(product)
    ? product.filter(
        (product) => product.category === selectedCategory
    )
    : [];

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-1/5 w-full bg-white p-4 border-r shadow-lg lg:shadow-none">
                <h2 className="text-lg font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                    <li>
                        <button
                            className={`w-full text-left py-2 px-4 ${selectedCategory === 'rocking chair' ? 'bg-gray-200' : ''
                                }`}
                            onClick={() => setSelectedCategory('rocking chair')}
                        >
                            Rocking Chair
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left py-2 px-4 ${selectedCategory === 'side chair' ? 'bg-gray-200' : ''
                                }`}
                            onClick={() => setSelectedCategory('side chair')}
                        >
                            Side Chair
                        </button>
                    </li>
                    <li>
                        <button
                            className={`w-full text-left py-2 px-4 ${selectedCategory === 'lounge chair' ? 'bg-gray-200' : ''
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
                <h2 className="text-xl font-bold mb-4 capitalize">
                    {selectedCategory.replace('-', ' ')}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => <ProductCard key={index} product={product}/> ) }
                </div>
            </div>
        </div>
    );
};

export default Home;