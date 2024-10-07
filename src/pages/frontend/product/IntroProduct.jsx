import React from 'react'
import ProductItem from './ProductItem';
import { useEffect, useState } from "react";
import ProductService from '../../../services/ProductService';
const IntroProduct = () => {
    const[products,setProducts]=useState()
    useEffect(() => {
      (async () => {
        const result = await ProductService.list(1, 3);
        setProducts(result.products);
      })();
    }, []);
  return (
    <div>
          <div className="intro row ">
              {products &&
                products.length > 0 &&
                products.map((product,index) => {
                  return (
                    <div className="intro-pr col-md-3" key={index}>
                      <ProductItem product={product} />
                    </div>
                  );  
                })}
            </div>
    </div>
  )
}

export default IntroProduct
