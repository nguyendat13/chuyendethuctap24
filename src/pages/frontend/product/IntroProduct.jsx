import React from 'react'
import ProductItem from './ProductItem';
import { useEffect, useState } from "react";
import ProductService from '../../../services/ProductService';
import { Link } from 'react-router-dom';
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
       <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <Link href="/home/shop" className="btn">
                  Explore
                </Link>
              </p>
            </div>
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
