import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from "react";
import OrderService from "../../../services/OrderService";
import { urlImage } from "../../../config";

const OrderCreate = () => {
    const [orders, setorders] = useState("");
    const [isLoad,setIsload]=useState(0);
    const [delivery_name, setDeliveryName] = useState("");
    const [delivery_email, setDeliveryEmail] = useState("");
    const [delivery_phone, setDeliveryPhone] = useState("");
    const [delivery_address, setDeliveryAddress] = useState("");
    const [note, setNote] = useState("");
    const [status, setStatus] = useState(2);
  //load du lieu len grid
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = document.querySelector("#image");
    let order= new FormData();
    order.append("delivery_name",delivery_name);
    order.append("delivery_email",delivery_email);
    order.append("delivery_phone",delivery_phone);
    order.append("delivery_address",delivery_address);
    order.append("note",note);
    order.append("image", image.files.length === 0 ? "" : image.files[0]);
    order.append("status",status);
    (async () => {
      const result = await OrderService.store(order);
      if (result.status === true) {
        setIsload(result.order.isLoad);
        window.location.href = "/admin/order";
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
                                <li class="breadcrumb-item"><Link to="/admin/order">Quay về</Link></li>
                                <li class="breadcrumb-item active">order Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
      <div className="card ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong><h1>Thêm order</h1></strong>
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
                  value={delivery_name}
                  onChange={(e) => setDeliveryName(e.target.value)}
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
                  value={delivery_email}
                  onChange={(e) => setDeliveryEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="phone" className="d-inline-block mb-2">
                 Số điện thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  value={delivery_phone}
                  onChange={(e) => setDeliveryPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="address" className="d-inline-block mb-2">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="address"
                  value={delivery_address}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="note" className="d-inline-block mb-2">
                  Ghi chú
                </label>
                <textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
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

export default OrderCreate
