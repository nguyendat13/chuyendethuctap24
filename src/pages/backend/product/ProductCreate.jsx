import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
import myslug from "../../Myslug";

const ProductCreate = () => {
  const [insertId, setInsertId] = useState(0);
  //category
  const [categorys, setCategorys] = useState([]);
  useEffect(
    function () {
      (async () => {
        const result = await CategoryService.getAll();
        if (result.status === true) {
          setCategorys(result.categorys);
          console.log(result.categorys);
        }
      })();
    },
    [insertId]
  );

  // brand

  const [brands, setBrands] = useState([]);
  useEffect(
    function () {
      (async () => {
        const result = await BrandService.getAll();
        if (result.status === true) {
          setBrands(result.brands);
          console.log(result.brands);
        }
      })();
    },
    [insertId]
  );

  // Product

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const image = document.querySelector("#image");
    const product = new FormData();
    product.append("name", name);
    product.append("detail", detail);
    product.append("slug", myslug(name));
    product.append("description", description);
    product.append("category_id", category_id);
    product.append("brand_id", brand_id);
    product.append("price", price);
    product.append("pricesale", pricesale);
    product.append("qty", qty);
    product.append("status", status);
    product.append("image", image.files.length === 0 ? "" : image.files[0]);

    (async () => {
      const result = await ProductService.store(product);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.product.insertId);
        console.log(result);
        window.location.href = "/admin/product";
      }
    })();
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger">Thêm sản phẩm</strong>
            </div>
            <div className="col-6 text-end">
              <button className="btn btn-sm btn-success" type="submit">
                Thêm mới
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Ten san pham</strong>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Ten slug</strong>
                </label>
                <input
                  value={myslug(name)}
                  onChange={(e) => setSlug(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Chi tiet</strong>
                </label>
                <textarea
                  rows={5}
                  className="form-control"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mo ta</strong>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label>
                  <strong>Danh muc</strong>
                </label>
                <select
                  value={category_id}
                  onChange={(e) => setCategoryid(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Chon danh muc</option>
                  {categorys &&
                    categorys.map((category) => {
                      return (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Thuong hieu</strong>
                </label>
                <select
                  className="form-control"
                  value={brand_id}
                  onChange={(e) => setBrandid(e.target.value)}
                >
                  <option value="0">Chon thuong hieu</option>
                  {brands &&
                    brands.map((brand) => {
                      return (
                        <option value={brand.id} key={brand.id}>
                          {brand.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Gia</strong>
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Gia Sale</strong>
                </label>
                <input
                  value={pricesale}
                  onChange={(e) => setPricesale(e.target.value)}
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>So luong</strong>
                </label>
                <input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Hinh</strong>
                </label>
                <input className="form-control" type="file" id="image" />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trang thai</strong>
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="1">Xuat ban</option>
                  <option value="2">Chua xuat ban</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductCreate;