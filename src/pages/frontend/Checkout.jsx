import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OrderService from "../../services/OrderService";
import { urlImage } from "../../config";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], subtotal = 0 } = location.state || {};

  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryEmail, setDeliveryEmail] = useState("");
  const [deliveryPhone, setDeliveryPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!deliveryName || !deliveryEmail || !deliveryPhone || !deliveryAddress) {
      setError("Please fill in all the required fields.");
      setLoading(false);
      return;
    }
  
    const order = {
      delivery_name: deliveryName,
      delivery_email: deliveryEmail,
      delivery_phone: deliveryPhone,
      delivery_address: deliveryAddress,
      note,
      total: subtotal,
      status: 2,
      items: cartItems,
    };
  
    try {
      const result = await OrderService.store(order);
      if (result.status) {
        // Navigate to Orders with order details
        navigate("/home/orders", { state: { order: { ...order, id: result.orderId } } });
      }
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      existingOrders.push(order);
      localStorage.setItem("orders", JSON.stringify(existingOrders));
  
      navigate("/home/orders");
    } catch (error) {
      console.error("Error while saving order:", error);
      setError("Failed to save order. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  
  
  

  if (cartItems.length === 0) {
    return (
      <div className="no-item">
        No items in your cart. Please go back to shopping.
        <div className="no col-md-6">
          <Link to="/home/shop" className="btn btn-outline-black ms-2">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <h1 className="text-main">Delivery Information</h1>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={deliveryName}
                    onChange={(e) => setDeliveryName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={deliveryPhone}
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
                    value={deliveryEmail}
                    onChange={(e) => setDeliveryEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="note">Note</label>
                  <textarea
                    name="note"
                    className="form-control"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="text-end">
                  <button type="submit" className="btn btn-success px-4" disabled={loading}>
                    {loading ? 'Processing...' : 'Confirm'}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <h2 className="fs-5 text-main">Order Information</h2>
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
                      <strong>{subtotal.toFixed(2)}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
