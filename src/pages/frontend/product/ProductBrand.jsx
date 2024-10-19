import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { Link, Navigate, useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import BrandService from "../../../services/BrandService";
import Pagination from "../Pagination";
import MenuBrand from "../brand/MenuBrand";

const Productbrand = () => {
  const [brand, setBrand] = useState({});
  let { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
 

  
  useEffect(() => {
    (async () => {
      const result = await BrandService.detail(slug, 4);
      if (result.status === true) {
        const brandObject = Array.isArray(result.brand)
          ? result.brand[0]
          : result.brand;
        setBrand(brandObject);  
      }
    })();
  }, [slug]);
  useEffect(() => {
    (async () => {
      const result2 = await ProductService. list_brand(
        brand.id,
        limit
      );
      setProducts(result2.products);
    })();
  }, [brand.id,limit]);

  return (
    <section className="maincontent">
    <div className="container ">
        <MenuBrand/>
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
  );
};

export default Productbrand;
