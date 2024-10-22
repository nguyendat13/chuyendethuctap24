import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProductItem from "./product/ProductItem";
import Slider from "./banner/Slider";
import Pagination from "./Pagination";

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract current page from query parameters
  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get("page")) || 1;

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);

  // Fetch products when the current page or limit changes
  useEffect(() => {
    fetchData();
  }, [currentPage, limit]);

  const fetchData = async () => {
    try {
      const result = await ProductService.getAll(currentPage, limit);
      setProducts(result.products);
      setTotalProducts(result.totalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/shop?page=${pageNumber}`); // Update URL on page change
  };

  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <h1>All Products</h1>
              <p className="mb-4">Check out before the sale ends!</p>
              <a href="/home/cart" className="btn btn-secondary me-2">
                Pay immediately
              </a>
            </div>
            <div className="col-lg-7">
              <Slider />
            </div>
          </div>
        </div>
      </div>

      <section className="maincontent">
        <div className="container">
          <ul className="list-group list-group-horizontal border-bottom fs-6 fw-normal pt-3 pb-3">
            <li className="list-group-item me-3 rounded-pill">
              <Link to="/home/category" className="text-decoration-none text-dark">
                Category
              </Link>
            </li>
            <li className="list-group-item me-3 rounded-pill">
              <Link to="/home/brand" className="text-decoration-none text-dark">
                Brand
              </Link>
            </li>
          </ul>

          <div className="row">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div className="col-md-3" key={index}>
                  <ProductItem product={product} />
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>

          {/* <div className="text-center pt-3">
            <Pagination
              total={totalProducts}
              limit={limit}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Shop;
