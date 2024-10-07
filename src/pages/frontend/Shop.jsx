import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { Link, Navigate, useLocation } from "react-router-dom";
import ProductItem from "./product/ProductItem"
import Cross from "../../assets/images/cross.svg";
import Pagination from "./Pagination";
const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchData();
    const newOffset = (currentPage - 1) * limit;
    setOffset(newOffset);
  }, [currentPage, limit]);
  const fetchData = async () => {
    try {
      const result = await ProductService.list(currentPage, limit);
      setProducts(result.products);
      setTotalProducts(result.totalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Update URL with new page number
    Navigate(`/shop?page=${pageNumber}`);
  };
  return (
    <div>
      <div class="hero">
        <div className="shop">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>All Product</h1>
                <div>
                  <p class="mb-4">
                    You Should checkout now before the sales is end
                  </p>
                  <p>
                    <a href="/cart" class="btn btn-secondary me-2">
                      Pay immediately
                    </a>
                  </p>
                </div>
              </div>
              <div class="hero-img-wrap"></div>
            </div>
            <div class="col-lg-7">
              <div class="hero-img-wrap"></div>
              <div className="container">
                <img
                  src="https://dalanadecor.com/wp-content/uploads/2020/09/dalana-decor-banner-1.jpg"
                  className="img-fluid border rounded"
                />
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
      <section className="maincontent">
        <div className="container ">
        <ul className="list-group  list-group-horizontal border-bottom fs-6 fw-normal pt-3 pb-3 position-relative">
          
          <li
            className="list-group-item me-3 rounded-pill"
            data-tab="tab-2"
          >
            <a href="category" className="text-decoration-none text-dark">
              Category
            </a>
          </li>
          <li
            className="list-group-item me-3 rounded-pill"
            data-tab="tab-3"s
          >
            <a href="brand" className="text-decoration-none text-dark">
              Brand
            </a>
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
              <div className=" text-center pt-3">
                <Pagination
                  limit={limit}
                  currentPage={currentPage}
                  url={"/shop"} // Example base URL
                  onPageChange={handlePageChange}
                  total={totalProducts}
                />
              </div>
        </div>
      </section>
   </div>   
  );
};

export default Shop;
//   {/* <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
//               <a class="product-item" href="cart.html">
//                 <img src={Pro1} class="img-fluid product-thumbnail" />
//                 <h3 class="product-title">Nordic Chair</h3>
//                 <strong class="product-price">$50.00</strong>

//                 <span class="icon-cross">
//                   <img src={Cross} class="img-fluid" />
//                 </span>
//               </a>
//             </div>

//             <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
//               <a class="product-item" href="cart.html">
//                 <img src={Pro3} class="img-fluid product-thumbnail" />
//                 <h3 class="product-title">Ergonomic Chair</h3>
//                 <strong class="product-price">$43.00</strong>

//                 <span class="icon-cross">
//                   <img src={Cross} class="img-fluid" />
//                 </span>
//               </a>
//             </div> */}

//             {/* <div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-3.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Nordic Chair</h3>
// 							<strong class="product-price">$50.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div> 
						
// 					<div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-1.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Nordic Chair</h3>
// 							<strong class="product-price">$50.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div> 

// 					<div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-2.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Kruzo Aero Chair</h3>
// 							<strong class="product-price">$78.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div>

// 					<div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-3.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Ergonomic Chair</h3>
// 							<strong class="product-price">$43.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div>


// 					<div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-3.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Nordic Chair</h3>
// 							<strong class="product-price">$50.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div> 
						
// 					<div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-1.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Nordic Chair</h3>
// 							<strong class="product-price">$50.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div> 

// 					<div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-2.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Kruzo Aero Chair</h3>
// 							<strong class="product-price">$78.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div>

// 					<div class="col-12 col-md-4 col-lg-3 mb-5">
// 						<a class="product-item" href="#">
// 							<img src="images/product-3.png" class="img-fluid product-thumbnail"/>
// 							<h3 class="product-title">Ergonomic Chair</h3>
// 							<strong class="product-price">$43.00</strong>

// 							<span class="icon-cross">
// 								<img src="images/cross.svg" class="img-fluid"/>
// 							</span>
// 						</a>
// 					</div> */}