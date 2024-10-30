import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
import myslug from "../../Myslug";
import { urlImage } from "../../../config";

const ProductEdit = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [brands, setBrands] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [imagePreview, setImagePreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Chặn nhiều lần submit

  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategoryid] = useState(0);
  const [brand_id, setBrandid] = useState(0);
  const [price, setPrice] = useState(0);
  const [pricesale, setPricesale] = useState(0);
  const [qty, setQty] = useState(0);
  const [status, setStatus] = useState(1);
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResult = await CategoryService.getAll();
        const brandResult = await BrandService.getAll();
        const productResult = await ProductService.show(id);

        if (categoryResult.status) setCategorys(categoryResult.categorys);
        if (brandResult.status) setBrands(brandResult.brands);
        if (productResult.status) {
          const productData = Array.isArray(productResult.product)
            ? productResult.product[0]
            : productResult.product;

          setProduct(productData);
          setName(productData.name);
          setSlug(productData.slug);
          setDetail(productData.detail);
          setDescription(productData.description);
          setCategoryid(productData.category_id);
          setBrandid(productData.brand_id);
          setPrice(productData.price);
          setPricesale(productData.pricesale);
          setQty(productData.qty);
          setStatus(productData.status);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true); // Ngăn submit nhiều lần

    const image = document.querySelector("#image");
    const productData = new FormData();
    productData.append("name", name);
    productData.append("slug", myslug(name));
    productData.append("detail", detail);
    productData.append("description", description);
    productData.append("category_id", category_id);
    productData.append("brand_id", brand_id);
    productData.append("price", price);
    productData.append("pricesale", pricesale);
    productData.append("status", status);
    if (image.files.length > 0) {
      productData.append("image", image.files[0]);
    }

    try {
      const result = await ProductService.edit(id, productData);
      if (result.status) {
        alert(result.message);
        window.location.href = "/admin/product";
      } else {
        alert("Cập nhật thất bại!");
      }
    } catch (error) {
      console.error("Failed to update product", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger">Chỉnh sửa sản phẩm</strong>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/admin/product" className="btn btn-sm btn-danger">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Form inputs */}
            <div className="col-md-9">
              <div className="mb-3">
                <label><strong>Tên sản phẩm</strong></label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label><strong>Slug</strong></label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label><strong>Chi tiết</strong></label>
                <textarea
                  rows={5}
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label><strong>Mô tả</strong></label>
                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            {/* Sidebar inputs */}
            <div className="col-md-3">
              <div className="mb-3">
                <label><strong>Danh mục</strong></label>
                <select
                  value={category_id}
                  onChange={(e) => setCategoryid(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Chọn danh mục</option>
                  {categorys.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label><strong>Thương hiệu</strong></label>
                <select
                  value={brand_id}
                  onChange={(e) => setBrandid(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Chọn thương hiệu</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label><strong>Giá</strong></label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label><strong>Giá Sale</strong></label>
                <input
                  type="number"
                  value={pricesale}
                  onChange={(e) => setPricesale(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label><strong>Trạng thái</strong></label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div>
              <label><strong>Hình hiện tại</strong></label>
                <img src={urlImage + "products/" + product.image}
                alt={product.image} style={{ width: "100px" }} />            
              </div>
              <div className="mb-3">
                <label><strong>Chọn hình mới</strong></label>
                <input type="file" id="image" className="form-control" />
              </div>
              <button type="submit" className="btn btn-success btn-sm">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductEdit;
