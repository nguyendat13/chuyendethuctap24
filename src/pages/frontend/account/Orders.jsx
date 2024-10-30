import React, { useEffect, useState } from "react";
import "../../../css/order.css"; // CSS phù hợp cho giao diện
import { urlImage } from "../../../config";
import OrderService from "../../../services/OrderService";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoad, setIsLoad] = useState(false); // To trigger re-renders
  const [editOrder, setEditOrder] = useState(null); // Để lưu thông tin đơn hàng đang chỉnh sửa
  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryEmail, setDeliveryEmail] = useState("");
  const [deliveryPhone, setDeliveryPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return <p>Không có đơn hàng nào.</p>;
  }

  // const calculateTotal = (items = []) =>
  //   items.reduce((total, item) => total + (item.price || 0) * (item.qty || 0), 0).toFixed(2);

  // const calculateQuantity = (items = []) =>
  //   items.reduce((total, item) => total + (item.qty || 0), 0);

  const handleDeleteOrder = async (id) => {
    try {
      const result = await OrderService.delete(id); // Gọi API xóa đơn hàng
      if (result.status) {
        const updatedOrders = orders.filter((order) => order.id !== id); // Cập nhật state
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Cập nhật localStorage
      } else {
        alert("Không thể xóa đơn hàng.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa đơn hàng:", error);
      alert("Có lỗi xảy ra khi xóa đơn hàng.");
    }
  };

  const getStatusLabel = (order_status) => {
    switch (order_status) {
      case 1:
        return "Đang xử lý";
      case 2:
        return "Đã xác nhận";
      case 3:
        return "Đang vận chuyển";
      case 4:
        return "Đã giao";
      case 5:
        return "Đã hủy";
      default:
        return "Không xác định";
    }
  };

  const handleEditOrder = (order) => {
    setEditOrder(order); // Lưu đơn hàng cần chỉnh sửa vào state
    setDeliveryName(order.delivery_name);
    setDeliveryEmail(order.delivery_email);
    setDeliveryPhone(order.delivery_phone);
    setDeliveryAddress(order.delivery_address);
    setNote(order.note);
  };

  const handleSaveEdit = async () => {
    const updatedOrder = {
        ...editOrder,
        delivery_name: deliveryName,
        delivery_email: deliveryEmail,
        delivery_phone: deliveryPhone,
        delivery_address: deliveryAddress,
        note,
        // Nếu cần, cập nhật thêm order_status ở đây nếu có thay đổi
    };

    // Gọi API để cập nhật đơn hàng
    try {
        const result = await OrderService.update(updatedOrder); // Thay thế với phương thức API tương ứng
        if (result.status) {
            const updatedOrders = orders.map(order => order.id === updatedOrder.id ? updatedOrder : order);
            setOrders(updatedOrders);
            localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Cập nhật localStorage
            setEditOrder(null); // Đóng modal
        } else {
            alert("Không thể cập nhật đơn hàng.");
        }
    } catch (error) {
        console.error("Lỗi khi cập nhật đơn hàng:", error);
        alert("Có lỗi xảy ra khi cập nhật đơn hàng.");
    }
};


  return (
    <div className="order-details container">
      <h2>All orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-item mb-5">
          <h3>Order #{order.id}</h3>
          <button
              className="btn btn-danger"
              onClick={() => handleDeleteOrder(order.id)} // Gọi hàm xóa với id của đơn hàng
          >
              Hủy Đơn Hàng
          </button>
          <button
              className="btn btn-primary ms-2"
              onClick={() => handleEditOrder(order)} // Mở modal chỉnh sửa
          >
              Chỉnh Sửa
          </button>
          <div className="order-info">
            <p><strong>Name:</strong> {order.delivery_name}</p>
            <p><strong>Email:</strong> {order.delivery_email}</p>
            <p><strong>Phone:</strong> {order.delivery_phone}</p>
            <p><strong>Address:</strong> {order.delivery_address}</p>
            <p><strong>Note:</strong> {order.note}</p>
            <p><strong>Status:</strong> {getStatusLabel(order.order_status)}</p>
            </div>

          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items && order.items.length > 0 && order.items.map((item) => (
                <tr key={item.product_id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={urlImage + "products/" + item.image}
                        alt={item.name}
                        className="img-thumbnail me-3"
                        style={{ width: "80px" }}
                      />
                      <div>
                        <p className="mb-1">{item.name}</p>
                        <span className="text-muted">Đợi ý 15 ngày</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{item.qty}</td>
                  <td className="text-center">{item.price.toFixed(2)} VND</td>
                  <td className="text-center">
                    {(item.price * item.qty).toFixed(2)} VND
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Modal chỉnh sửa đơn hàng */}
      {editOrder && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chỉnh Sửa Đơn Hàng</h5>
                <button type="button" className="btn-close" onClick={() => setEditOrder(null)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={deliveryName}
                    onChange={(e) => setDeliveryName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={deliveryEmail}
                    onChange={(e) => setDeliveryEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={deliveryPhone}
                    onChange={(e) => setDeliveryPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="note">Note</label>
                  <textarea
                    className="form-control"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setEditOrder(null)}>Đóng</button>
                <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>Lưu thay đổi</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
