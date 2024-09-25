import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import MenuService from "../../../services/MenuService";
import { urlImage } from "../../../config";

const MenuCreate = () => {
  const [menus, setmenus] = useState("");
  const [isLoad,setIsload]=useState(0);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [position, setPosition] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [parent_id, setParentId] = useState(0);

  const [status, setStatus] = useState(2);
//load du lieu len grid
const handleSubmit = (e) => {
  e.preventDefault();

  const image = document.querySelector("#image");
  let menu= new FormData();
  menu.append("name",name);
  menu.append("link",link);
  menu.append("position",position);
  menu.append("parent_id",parent_id);
  menu.append("sort_order",sort_order);
  menu.append("image", image.files.length === 0 ? "" : image.files[0]);
  menu.append("status",status);
  (async () => {
    const result = await MenuService.store(menu);
    if (result.status === true) {
        console.log(result.message)
      setIsload(result.menu.isLoad);
      window.location.href = "/admin/menu";
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
                                <li class="breadcrumb-item"><Link to="/admin/menu">Quay về</Link></li>
                                <li class="breadcrumb-item active">menu Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
      <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Thêm menu</h1></strong>
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
                Link
                </label>
                <input
                  type="text"
                  id="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="d-inline-block mb-2">
                  Vị trí
                </label>
                <select
                  id="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="form-select"
                >
                    <option value="0">None</option>
                  {menus && menus.length >0 && menus.map((menu,index)=>{
                    return <option key={menu.position} value={menu.position}>{menu.position}</option>
                  })}
                </select>
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
                  {menus && menus.length >0 && menus.map((menu,index)=>{
                    return <option key={menu.id} value={menu.id}>{menu.parent_id}</option>
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
                  {menus  && menus.length >0 && menus.map((menu,index)=>{
                    return <option key={menu.sort_order+1} value={menu.id}>Sau: {menu.sort_order}</option>
                  })}
                </select>
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

export default MenuCreate
