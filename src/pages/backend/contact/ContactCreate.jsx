import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import ContactService from "../../../services/ContactService";
import { urlImage } from "../../../config";

const ContactCreate = () => {
    const [contacts, setcontacts] = useState("");
  const [isLoad,setIsload]=useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(2);
//load du lieu len grid
const handleSubmit = (e) => {
  e.preventDefault();

  const image = document.querySelector("#image");
  let contact= new FormData();
  contact.append("name",name);
  contact.append("email",email);
  contact.append("phone",phone);
  contact.append("title",title);
  contact.append("content",content);
  contact.append("image", image.files.length === 0 ? "" : image.files[0]);
  contact.append("status",status);
  (async () => {
    const result = await ContactService.store(contact);
    if (result.status === true) {
      setIsload(result.contact.isLoad);
      window.location.href = "/admin/contact";
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
                                <li class="breadcrumb-item"><Link to="/admin/contact">Quay về</Link></li>
                                <li class="breadcrumb-item active">contact Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
      <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Thêm contact</h1></strong>
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
                <label htmlFor="email" className="d-inline-block mb-2">
                Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="d-inline-block mb-2">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                >
                </input>
              </div>
              <div className="mb-2">
                <label htmlFor="title" className="d-inline-block mb-2">
                  Tiêu đề
                </label>
                <textarea
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-2">
                <label htmlFor="content" className="d-inline-block mb-2">
                  Nội dung
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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

export default ContactCreate
