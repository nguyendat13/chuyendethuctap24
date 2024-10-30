import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderService from "../../../services/OrderService";
import { FaEye, FaRegEdit, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { urlImage } from "../../../config";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isLoad, setIsLoad] = useState(false); // To trigger re-renders

  // Fetch orders on mount and whenever data changes
  useEffect(() => {
    fetchOrders();
  }, [isLoad]);

  const fetchOrders = async () => {
    try {
      const result = await OrderService.getAll();
      setOrders(result.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await OrderService.delete(id);
      if (result.status) {
        setIsLoad(!isLoad); // Trigger re-fetch of data
      } else {
        alert("Failed to delete order.");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order.");
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case 1:
        return "Đang xử lý";
      case 2:
        return "Đã xác nhận";
      case 3:
        return "Đang vận chuyển";
      case 4:
        return "Đã giao";
      case 5:
        return "Đã hủy"
      default:
        return "Không xác định";
    }
  };
  
  return (
    <div>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-9">
              <ol className="breadcrumb float-sm-right text-end">
                <li className="breadcrumb-item">
                  <Link to="/admin">Home</Link>
                </li>
                <li className="breadcrumb-item active">Order Page</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <h1>Quản lí order</h1>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/admin/order/create" className="btn btn-success">
                Thêm order
              </Link>
              <Link to="/admin/order/trash" className="btn btn-danger ms-2">
                <FaTrash /> Thùng rác
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                {/* <th>Hình ảnh</th> */}
                <th>Tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Ghi chú</th>
                <th>Ngày tạo</th>
                <th>ID</th>
                <th>Trạng thái đơn hàng</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td><input type="checkbox" /></td>
                  {/* <td>
                    <img
                      src={`${urlImage}orders/${order.image}`}
                      alt={order.image}
                      style={{ width: "100px" }}
                    />
                  </td> */}
                  <td>{order.delivery_name}</td>
                  <td>{order.delivery_email}</td>
                  <td>{order.delivery_phone}</td>
                  <td>{order.delivery_address}</td>
                  <td>{order.note}</td>
                  <td>{order.created_at}</td>
                  <td>{order.id}</td>
                  <td>{getStatusLabel(order.order_status)}</td>
                  <td className="functional">
                    <button
                      className={order.status ? "btn btn-success" : "btn btn-danger"}
                    >
                      {order.status ? <FaToggleOn /> : <FaToggleOff />}
                    </button>
                    <Link to={`/admin/order/show/${order.id}`} className="btn btn-primary ms-2">
                      <FaEye />
                    </Link>
                    <Link to={`/admin/order/edit/${order.id}`} className="btn btn-warning ms-2">
                      <FaRegEdit />
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(order.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
