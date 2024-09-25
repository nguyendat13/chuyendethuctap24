import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import BannerService from "../../../services/BannerService";
import { urlImage } from "../../../config";

const BannerCreate = () => {
  const [banners, setBanners] = useState("");
  const [isLoad,setIsload]=useState(0);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [position, setPosition] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
//load du lieu len grid
const handleSubmit = (e) => {
  e.preventDefault();
  const image = document.querySelector("#image");
  let banner= new FormData();
  banner.append("name",name);
  banner.append("link",link);
  banner.append("position",position);
  banner.append("description",description);
  banner.append("image", image.files.length === 0 ? "" : image.files[0]);
  banner.append("status",status);
  (async () => {
    const result = await BannerService.store(banner);
    if (result.status === true) {
      setIsload(result.banner.isLoad);
      window.location.href = "/admin/banner";
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
                                <li class="breadcrumb-item"><Link to="/admin/banner">Quay về</Link></li>
                                <li class="breadcrumb-item active">banner Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
      <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Thêm banner</h1></strong>
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
                <label htmlFor="link" className="d-inline-block mb-2">
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
                <label htmlFor="position" className="d-inline-block mb-2">
                  Vị trí
                </label>
                <select
                  id="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="form-select"
                >
                    <option value="0">None</option>
                  {banners && banners.length >0 && banners.map((banner,index)=>{
                    return <option key={banner.id} value={banner.id}>{banner.position}</option>
                  })}
                </select>
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

export default BannerCreate
