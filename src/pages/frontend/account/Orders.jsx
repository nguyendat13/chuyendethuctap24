import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderService from "../../../services/OrderService";
import { urlImage } from "../../../config";

const Orders = () => {
  const location = useLocation();
  const { cartItems = [], subtotal = 0 } = location.state || {};

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingItem, setLoadingItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const result = await OrderService.getAll();
      setOrders(result.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to fetch orders. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (orderId) => {
    setLoadingItem(orderId);
    try {
      const result = await OrderService.delete(orderId);
      if (result.status) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== orderId)
        );
      } else {
        setError("Failed to remove order. Please try again.");
      }
    } catch (error) {
      console.error("Error removing order:", error);
      setError("Failed to remove order. Please try again.");
    } finally {
      setLoadingItem(null);
    }
  };

  const calculateTotal = (items) => {
    if (!items || !Array.isArray(items)) return 0;
    return items.reduce((acc, item) => {
      const itemTotal = (item.price || 0) * (item.qty || 0);
      return acc + itemTotal;
    }, 0);
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="orders">
      <div className="container mt-5">
        <h2>My Orders</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        {orders.length > 0 ? (
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Image</th>
                <th>Creation Date</th>
                <th>Order Status</th>
                <th>Total</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id || "N/A"}</td>
                  <td>
                    {order.items && order.items.length > 0 ? (
                      <img
                        className="img-fluid"
                        src={`${urlImage}products/${order.items[0].image}`} // Display the first item's image
                        alt={order.items[0].name}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>
                    {order.created_at
                      ? new Date(order.created_at).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>{order.order_status || "Pending"}</td>
                  <td className="text-center">
                    {calculateTotal(order.items).toFixed(2)}
                  </td>
                  <td className="text-center">
                    {order.items
                      ? order.items.reduce((total, item) => total + item.qty, 0)
                      : 0}
                  </td>
                  <td>
                    <button
                      className="btn btn-black"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveItem(order.id);
                      }}
                      disabled={loadingItem === order.id}
                    >
                      {loadingItem === order.id ? (
                        <span className="spinner-border spinner-border-sm" />
                      ) : (
                        "X"
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Bạn chưa có đơn hàng nào.</p> // "You have no orders."
        )}
        
      </div>
    </div>
  );
};

export default Orders;
