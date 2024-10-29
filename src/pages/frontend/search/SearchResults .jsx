import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductService from '../../../services/ProductService'; // Dịch vụ để lấy sản phẩm

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get('query'); // Lấy từ khóa tìm kiếm từ URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.searchProducts(query); // Gọi dịch vụ tìm kiếm
        setProducts(response.products); // Cập nhật state với danh sách sản phẩm
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
        setError("Lỗi khi tải sản phẩm.");
      } finally {
        setLoading(false);
      }
    };

    if (query) { // Kiểm tra nếu có query
      fetchProducts();
    }
  }, [query]);

  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (products.length === 0) return <p>Không tìm thấy sản phẩm nào!</p>;

  return (
    <div>
      <h1>Kết quả tìm kiếm cho: <strong>{query}</strong></h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Giá: {product.price} VNĐ</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
