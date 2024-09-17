import React, { createContext, useState } from "react";

export const ProductContext = createContext();
export const productProvider = ({children}) =>{
    const [products,setProducts] =useState([]);

    return(
        <ProductContext.Provider value={{products,setProducts}}>
         {children}
        </ProductContext.Provider>
    )
}