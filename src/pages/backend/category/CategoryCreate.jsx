import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { urlImage } from "../../../config";

const CategoryCreate = () => {
    const [categorys, setCategorys] = useState("");
  const [isLoad,setIsload]=useState(0);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
//load du lieu len grid

const handleSubmit = (e) => {
  e.preventDefault();

  const image = document.querySelector("#image");
  let category= new FormData();
  category.append("name",name);
  category.append("slug",slug);
  category.append("parent_id",parent_id);
  category.append("sort_order",sort_order);
  category.append("description",description);
  category.append("image", image.files.length === 0 ? "" : image.files[0]);
  category.append("status",status);
  (async () => {
    const result = await CategoryService.store(category);
    if (result.status === true) {
      setIsload(result.category.isLoad);
      window.location.href = "/admin/category";
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
                                <li class="breadcrumb-item"><Link to="/admin/category">Quay về</Link></li>
                                <li class="breadcrumb-item active">Category Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Thêm Category</h1></strong>
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
                <label htmlFor="slug" className="d-inline-block mb-2">
                Slug
                </label>
                <input
                  type="text"
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="description" className="d-inline-block mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
              <label htmlFor="image" className="d-inline-block mb-1">
                Image
              </label>
              <input type="file" id="image" className="form-control" />
            </div>
              <div className="mb-3">
                <label htmlFor="parent_id" className="d-inline-block mb-2">
                  Cấp cha
                </label>
                <select
                  id="parent_id"
                  value={parent_id}
                  onChange={(e) => setParentId(e.target.value)} 
                  className="form-select"
                >
                  <option value="0">None</option>
                  {categorys && categorys.length >0 && categorys.map((category,index)=>{
                    return <option key={category.id} value={category.id}>{category.name}</option>
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="sort_order" className="d-inline-block mb-2">
                  Sắp xếp
                </label>
                <select
                  id="sort_order"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="form-select"
                >
                  <option value="1">Chọn vị trí</option>
                  {categorys  && categorys.length >0 && categorys.map((category,index)=>{
                    return <option key={category.sort_order+1} value={category.id}>Sau: {category.name}</option>
                  })}
                </select>
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

export default CategoryCreate
