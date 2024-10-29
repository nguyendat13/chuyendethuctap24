import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import OrderService from "../../../services/OrderService";
import { FaArrowLeft } from "react-icons/fa";
import { urlImage } from "../../../config";

const OrderShow = () => {
  const location = useLocation();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(location.state?.order || null); // Nhận order từ state

  // Fetch the order details when the component mounts
  useEffect(() => {
    const fetchOrder = async () => {
      if (!order) {
        try {
          const result = await OrderService.show(id);
          console.log("Fetched order:", result);
          setOrder(result.order || null);
        } catch (error) {
          console.error("Error fetching order details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Nếu order đã có thì không cần tải lại
      }
    };
    fetchOrder();
  }, [id, order]);

  if (loading) {
    return <p>Loading order details...</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  // Kiểm tra nếu items tồn tại và là một mảng
  const orderItems = Array.isArray(order.items) ? order.items : [];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Order #{order?.id || "N/A"}</h1>
        <Link to="/admin/order" className="btn btn-primary">
          <FaArrowLeft /> Back to Orders
        </Link>
      </div>
      <div className="card">
        <div className="card-body">
          <h2>Delivery Information</h2>
          <p><strong>Name:</strong> {order?.delivery_name || "N/A"}</p>
          <p><strong>Email:</strong> {order?.delivery_email || "N/A"}</p>
          <p><strong>Phone:</strong> {order?.delivery_phone || "N/A"}</p>
          <p><strong>Address:</strong> {order?.delivery_address || "N/A"}</p>
          <p><strong>Note:</strong> {order?.note || "N/A"}</p>
          <p><strong>Status:</strong> {order?.status ? "Completed" : "Pending"}</p>

          <h2 className="mt-4">Order Items</h2>
          <table className="table table-bordered">
            <thead>
              <tr className="bg-light">
                <th>Image</th>
                <th>Product Name</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item) => (
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
                    {item.price.toFixed(2)}
                  </td>
                  <td className="text-center align-middle">
                    {(item.price * item.qty).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end">
                  <strong>Subtotal:</strong>
                </td>
                <td className="text-center">
                  <strong>{(orderItems.reduce((total, item) => total + (item.price * item.qty), 0)).toFixed(2)}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderShow;
