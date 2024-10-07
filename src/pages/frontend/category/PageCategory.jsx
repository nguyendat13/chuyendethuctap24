import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { Link, Navigate, useLocation } from "react-router-dom";
import ProductItem from "../product/ProductItem";
import Cross from "../../../assets/images/cross.svg";
import Pagination from "../Pagination";
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
         <section className="maincontent">
        <div className="container ">
        <ul className="list-group  list-group-horizontal border-bottom fs-6 fw-normal pt-3 pb-3 position-relative">
          
            <li
              className="list-group-item me-1 rounded-pill"
              data-tab="tab-2"
            >
              <Link to="/category" className="category text-decoration-none text-dark">
                All
              </Link>
            </li>
          <li
            className="list-group-item me-1 rounded-pill"
            data-tab="tab-2"
          >
            <Link to="/category/modern" className="text-decoration-none text-dark">
            Modern
            </Link>
          </li>
          <li
            className="list-group-item me-1 rounded-pill"
            data-tab="tab-3"s
          >
            <Link to="/category/classical" className="text-decoration-none text-dark">
              Classical
            </Link>
          </li>
        </ul>
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
