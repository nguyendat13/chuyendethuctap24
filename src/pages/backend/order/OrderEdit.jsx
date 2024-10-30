import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderService from "../../../services/OrderService";

const OrderEdit = () => {
  const { id } = useParams(); // Lấy ID đơn hàng từ URL
  const [order, setOrder] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Ngăn submit nhiều lần

  const [delivery_name, setDeliveryName] = useState("");
  const [delivery_email, setDeliveryEmail] = useState("");
  const [delivery_phone, setDeliveryPhone] = useState("");
  const [delivery_address, setDeliveryAddress] = useState("");
  const [note, setNote] = useState("");
  const [order_status, setOrderStatus] = useState(1);

  // Fetch dữ liệu đơn hàng khi component được render
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const result = await OrderService.show(id);
        if (result.status) {
          const orderData = result.order;
          setOrder(orderData);
          setDeliveryName(orderData.delivery_name);
          setDeliveryEmail(orderData.delivery_email);
          setDeliveryPhone(orderData.delivery_phone);
          setDeliveryAddress(orderData.delivery_address);
          setNote(orderData.note);
          setOrderStatus(orderData.order_status);
        }
      } catch (error) {
        console.error("Failed to fetch order", error);
      }
    };
    fetchOrder();
  }, [id]);

  // Xử lý submit form
  const handleUpdate = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true); // Ngăn submit nhiều lần

    const orderData = {
      delivery_name,
      delivery_email,
      delivery_phone,
      delivery_address,
      note,
      order_status: Number(order_status), // Đảm bảo trạng thái là kiểu số
    };

    try {
      const result = await OrderService.edit(id, orderData);
      if (result.status) {
        alert(result.message);
        window.location.href = "/admin/order"; // Điều hướng sau khi cập nhật thành công
      } else {
        alert("Cập nhật đơn hàng thất bại!");
      }
    } catch (error) {
      console.error("Failed to update order", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger">Chỉnh sửa đơn hàng</strong>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/admin/order" className="btn btn-sm btn-danger">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label><strong>Tên người nhận</strong></label>
                <input
                  type="text"
                  value={delivery_name}
                  onChange={(e) => setDeliveryName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label><strong>Email</strong></label>
                <input
                  type="email"
                  value={delivery_email}
                  onChange={(e) => setDeliveryEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label><strong>Số điện thoại</strong></label>
                <input
                  type="text"
                  value={delivery_phone}
                  onChange={(e) => setDeliveryPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label><strong>Địa chỉ giao hàng</strong></label>
                <textarea
                  rows={3}
                  value={delivery_address}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label><strong>Ghi chú</strong></label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label><strong>Trạng thái đơn hàng</strong></label>
                <select
                  value={order_status}
                  onChange={(e) => setOrderStatus(e.target.value)}
                  className="form-control"
                >
                  <option value={1}>Đang xử lý</option>
                  <option value={2}>Đã xác nhận</option>
                  <option value={3}>Đang vận chuyển</option>
                  <option value={4}>Đã giao</option>
                  <option value={5}>Đã hủy</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-end">
          <button type="submit" className="btn btn-success btn-sm">
            Cập nhật
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrderEdit;
