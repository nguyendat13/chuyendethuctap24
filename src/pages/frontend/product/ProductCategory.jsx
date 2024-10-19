import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { Link, Navigate, useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";
import Pagination from "../Pagination";
import MenuCategory from "../category/MenuCategory";

const ProductCategory = () => {
  const [category, setCategory] = useState({});
  const [brands, setBrands] = useState({});
  let { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
 

  
  useEffect(() => {
    (async () => {
      const result = await CategoryService.detail(slug, 4);
      if (result.status === true) {
        const categoryObject = Array.isArray(result.category)
          ? result.category[0]
          : result.category;
        setCategory(categoryObject);  
      }
    })();
  }, [slug]);
  useEffect(() => {
    (async () => {
      const result2 = await ProductService.list_category(
        category.id,
        limit
      );
      setProducts(result2.products);
    })();
  }, [category.id,limit]);

  return (
    <section className="maincontent">
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
  );
};

export default ProductCategory;
