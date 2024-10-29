import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import ProductItem from "./ProductItem";
import { urlImage } from "../../../config";
import CartService from "../../../services/CartService";
import { useCart } from "../cart/CartContext";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1); // Quantity state
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const result = await ProductService.detail(slug, 4);
        setProduct(result.product);
        setProducts(result.products);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    })();
  }, [slug]);

  const handleAddToCart = async (productId, quantity) => {
    try {
      const result = await CartService.addToCart(productId, quantity); // Pass quantity when adding to cart
      console.log("Product added to cart successfully", result.productId);
      alert("Đã thêm một sản phẩm vào giỏ hàng");
      window.location.href = "/home/cart";

    } catch (error) {
      console.error("Failed to add product to cart", error);
    }
  };

  const handleQuantityChange = (delta) => {
    setQty((prev) => Math.max(1, prev + delta)); // Prevent negative quantities
  };

  return (
    <section className="maincontent py-2">
      <div className="container">
        <div className="row m-5">
          {/* Product Image Section */}
          <div className="col-md-4">
            <div className="image">
              <img
                src={`${urlImage}products/${product.image}`}
                className="img-fluid"
                alt={product.name}
              />
            </div>
            <div className="list-image mt-3">
              <div className="row">
                {[...Array(2)].map((_, index) => (
                  <div className="col-3" key={index}>
                    <img
                      className="img-fluid w-100"
                      src={`${urlImage}products/${product.image}`}
                      alt="Product thumbnail"
                      onClick={() => console.log("Change image logic here")} // Placeholder
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="col-md-6">
            <h1 className="text-main">{product.name}</h1>
            <h3 className="fs-5 py-2">{product.description}</h3>
            <h2 className="text-main py-4 p-2 h1 text-danger">
              {new Intl.NumberFormat("de-DE").format(product.price)} đ
            </h2>

            {/* Quantity Control */}
            <div className="mb-3">
              <label>Quantity</label>
              <div className="input-group mb-3">
                <button
                  className="input-group-text"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={qty}
                  readOnly
                  className="text-center"
                  size="3"
                />
                <button
                  className="input-group-text"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-3">
              <form onSubmit={(e) => { e.preventDefault(); handleAddToCart(product.id, qty); }}>
                <button type="submit" className="btn btn-success me-1">
                  Buy
                </button>
                <button
                  type="button"
                  className="btn btn-success ms-3"
                  onClick={() => handleAddToCart(product.id, qty)}
                >
                  Add to Cart
                </button>
              </form>
            </div>
          </div>

          {/* Product Description */}
          <h2 className="text-success m-3">Detailed Product Description</h2>
          <p className="detail">{product.detail}</p>

          {/* Other Products */}
          <h2 className="text-success m-4">Other Products</h2>
          <div className="row">
            {products.map((relatedProduct, index) => (
              <div className="col-3" key={index}>
                <ProductItem product={relatedProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
