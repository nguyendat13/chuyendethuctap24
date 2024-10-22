
import React from "react";
import { Link,useLocation } from "react-router-dom";
import {useEffect, useState } from "react";
import OrderService from "../../services/OrderService";
import { urlImage } from "../../config";

const OrderCreate = () => {
  const location = useLocation();
    const { cartItems = [], subtotal = 0 } = location.state || {};
    
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
        window.location.href = "/home/thanks";
      }
    })();
    };
    if (cartItems.length === 0) {
          return <div className="no-item ">No items in your cart. Please go back to shopping.
             <div className="no col-md-6">
                        <Link to="/home/shop" className="btn btn-outline-black ms-2">
                            Continue Shopping
                        </Link>
                    </div>
          </div>;
          
        }
  return (
    <div>
          <section className="py-5">
      <div className="container">
        <div className="row">
          <h1 className="text-main">Thông tin giao hàng</h1>
          <div className="col-md-6">
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Họ tên</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nhập họ tên"
                  value={delivery_name}
                  onChange={(e) => setDeliveryName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={delivery_phone}
                  onChange={(e) => setDeliveryPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={delivery_email}
                  onChange={(e) => setDeliveryEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={delivery_address}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="note">Ghi chú</label>
                <textarea
                  name="note"
                  className="form-control"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <div className="mb-3">
              <label htmlFor="image" className="d-inline-block mb-1">
                Image
              </label>
              <input type="file" id="image" className="form-control" />
            </div>

               {/* <h4 className="fs-6 text-main mt-4">Phương thức thanh toán</h4>
              <div className="thanhtoan mb-4">
                <div className="p-4 border">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    id="cod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />
                  <label htmlFor="cod">Thanh toán khi giao hàng</label>
                </div>
                <div className="p-4 border">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    id="bank"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="bank">Chuyển khoản qua ngân hàng</label>
                </div>
              </div>  */}
              <div className="text-end">
                <button type="submit" className="btn btn-success px-4">
                  Confirm
                </button>
              </div>
            </form> 
          </div>
          <div className="col-md-6">
            <h2 className="fs-5 text-main">Thông tin đơn hàng</h2>
            <table className="table table-bordered">
              <thead>
                <tr className="bg-light">
                  <th>Hình</th>
                  <th>Tên sản phẩm</th>
                  <th className="text-center">Số lượng</th>
                  <th className="text-center">Giá</th>
                  <th className="text-center">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.product_id}>
                    <td>
                      <img
                        className="img-fluid"
                        src={`${urlImage}products/${item.image}`}
                        alt={item.name}
                      />
                    </td>
                    <td className="align-middle">{item.name}</td>
                    <td className="text-center align-middle">{item.qty}</td>
                    <td className="text-center align-middle">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="text-center align-middle">
                      ${(item.price * item.qty).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-end">
                    <strong>Subtotal: ${subtotal.toFixed(2)}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          </div>
          </div>
        </section>
      </div>
  )
}

export default OrderCreate
