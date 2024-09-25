import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";

const ProductCreate = () => {
  const [products, setproducts] = useState("");
  const [isLoad,setIsload]=useState(0);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [pricesale, setPriceSale] = useState(0);
  const [status, setStatus] = useState(2);
//load du lieu len grid
const handleSubmit = (e) => {
  e.preventDefault();

  const image = document.querySelector("#image");
  let product= new FormData();
  product.append("name",name);
  product.append("detail",detail);
  product.append("description",description);
  product.append("price",price);
  product.append("pricesale",pricesale);
  product.append("image", image.files.length === 0 ? "" : image.files[0]);
  product.append("status",status);
  (async () => {
    const result = await ProductService.store(product);
    if (result.status === true) {
      setIsload(result.product.isLoad);
      window.location.href = "/admin/product";
    }
  })();
  };
 
  return (
    <div>
      <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                     
                        <div class="col-sm-9">
                            <ol class="breadcrumb float-sm-right text-end">
                                <li class="breadcrumb-item"><Link to="/admin/product">Quay về</Link></li>
                                <li class="breadcrumb-item active">product Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
      <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Thêm product</h1></strong>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
        <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="d-inline-block mb-2">
                  Tên
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="detail" className="d-inline-block mb-2">
                Chi tiết
                </label>
                <textarea
                  type="text"
                  id="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="description" className="d-inline-block mb-2">
                  Mô tả
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-2">
                <label htmlFor="price" className="d-inline-block mb-2">
                  Giá
                </label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="pricesale" className="d-inline-block mb-2">
                  Giá khuyến mãi
                </label>
                <input
                  type="number"
                  id="pricesale"
                  value={pricesale}
                  onChange={(e) => setPriceSale(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
              <label htmlFor="image" className="d-inline-block mb-1">
                Image
              </label>
              <input type="file" id="image" className="form-control" />
            </div>
              <div className="mb-3">
                <label htmlFor="status" className="d-inline-block mb-2">
                  Trạng thái
                </label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-select"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-2 text-end">
                <button 
                  type="submit"
                  className="btn btn-success text-white "
                  style={{ width: "200px" }}
                  name="THEM"
                >
                  Thêm
                </button>
              </div>
          </form>
        </div>
      </div>
          </div>
    </div>
  )
}

export default ProductCreate
