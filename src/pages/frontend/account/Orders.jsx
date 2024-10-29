import React, { useEffect, useState } from "react";
import "../../../css/order.css"; // CSS phù hợp cho giao diện
import { urlImage } from "../../../config";
import OrderService from "../../../services/OrderService";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoad, setIsLoad] = useState(false); // To trigger re-renders



  // useEffect(() => {
  //   fetchOrders();
  // }, [isLoad]);

  // const fetchOrders = async () => {
  //   try {
  //     const result = await OrderService.getAll();
  //     setOrders(result.orders || []); // Lưu danh sách đơn hàng vào state
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //   }
  // };



  // Lấy tất cả đơn hàng từ localStorage khi component được mount
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return <p>Không có đơn hàng nào.</p>;
  }

  const calculateTotal = (items = []) =>
    items.reduce((total, item) => total + (item.price || 0) * (item.qty || 0), 0).toFixed(2);

  const calculateQuantity = (items = []) =>
    items.reduce((total, item) => total + (item.qty || 0), 0);

  // const handleDeleteOrder = (orderIndex) => {
  //   const updatedOrders = orders.filter((_, index) => index !== orderIndex); // Loại bỏ đơn hàng theo index
  //   setOrders(updatedOrders); // Cập nhật state
  //   localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Lưu vào localStorage
  // };
  const handleDeleteOrder = async (orderId) => {
    try {
      const result = await OrderService.delete(orderId); // Gọi API xóa đơn hàng từ server
  
      if (result.status) {
        const updatedOrders = orders.filter(order => order.id !== orderId); // Xóa khỏi state
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Cập nhật localStorage
        alert("Đã xóa đơn hàng thành công!");
      } else {
        alert("Không thể xóa đơn hàng. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi xóa đơn hàng:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };
  
 
  
  return (
    <div className="order-details container">
      <h2>Tất Cả Đơn Hàng</h2>

      {orders.map((order,index) => (
        <div key={order.id} className="order-item mb-5">
          <h3>Đơn Hàng #{order.id}</h3>
          <button
              className="btn btn-danger"
              onClick={() => handleDeleteOrder(order.id)} // Gọi hàm xóa với id của đơn hàng
              >
              Xóa Đơn Hàng
            </button>
          <div className="order-info">
            <p><strong>Tên người nhận:</strong> {order.delivery_name}</p>
            <p><strong>Email:</strong> {order.delivery_email}</p>
            <p><strong>Số điện thoại:</strong> {order.delivery_phone}</p>
            <p><strong>Địa chỉ:</strong> {order.delivery_address}</p>
            <p><strong>Ghi chú:</strong> {order.note}</p>
            {/* <p><strong>Tổng cộng:</strong> {calculateTotal(order.items)} VND</p>
            <p><strong>Tổng số lượng:</strong> {calculateQuantity(order.items)}</p> */}
          </div>

          {/* <h4>Chi Tiết Sản Phẩm</h4> */}
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Sản Phẩm</th>
                <th className="text-center">Số Lượng</th>
                <th className="text-center">Đơn Giá</th>
                <th className="text-center">Tổng</th>
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
    </div>
  );
};

export default Orders;
