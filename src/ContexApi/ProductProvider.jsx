import { createContext, useEffect, useState } from "react";



export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState('')

    useEffect(()=>{
        fetch('../')
        .then(res => res.json())
        .then(data=> setProduct(data))
    },[])

    return (
       <ProductContext.Provider value={{product}}>
        { children }
       </ProductContext.Provider>
    );
};

export default ProductProvider;