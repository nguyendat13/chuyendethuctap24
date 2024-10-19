import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import { urlImage } from "../../../config";
import TopicService from "../../../services/TopicService";
import UserService from "../../../services/UserService";
const TopicCreate = () => {
  const [topics, settopics] = useState("");
  const [isLoad,setIsload]=useState(0);
  const [name, setName] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(2);
//load du lieu len grid
const handleSubmit = (e) => {
  e.preventDefault();
  const image = document.querySelector("#image");
  let topic= new FormData();
  topic.append("name",name);
  topic.append("description",description);
  topic.append("sort_order",sort_order);
  topic.append("image", image.files.length === 0 ? "" : image.files[0]);
  topic.append("status",status);
  (async () => {
    const result = await TopicService.store(topic);
    if (result.status == true) {
      setIsload(result.topic);
      window.location.href = "/admin/topic";
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
                                <li class="breadcrumb-item"><Link to="/admin/topic">Quay về</Link></li>
                                <li class="breadcrumb-item active">topic Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
      <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Thêm topic</h1></strong>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
        <form  onSubmit={handleSubmit}>
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
                    <option value="2">0</option>

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

export default TopicCreate
