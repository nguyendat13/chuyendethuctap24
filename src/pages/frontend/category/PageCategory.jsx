import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { Link, Navigate, useLocation } from "react-router-dom";
import ProductItem from "../product/ProductItem";
import Cross from "../../../assets/images/cross.svg";
import Pagination from "../Pagination";
import MenuCategory from "./MenuCategory";
const PageCategory = () => {
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);
  const [slug,setSlug] =useState()
  useEffect(() => {
    (async () => {
      const result2 = await ProductService.getAll(
      );
      setProducts(result2.products);
    })();
  }, []);

  return (
    <div>
         <section className="menu-cate maincontent">
        <div className="container ">
          <MenuCategory/>
            <div className="row ">
              {products &&
                products.length > 0 &&
                products.map((product,index) => {
                  return (
                    <div className="col-md-3" key={index}>
                      <ProductItem product={product} />
                    </div>
                  );  
                })}
            </div>
            
        </div>
      </section>
    </div>
  )
}

export default PageCategory
