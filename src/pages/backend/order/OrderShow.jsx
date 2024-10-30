// import React, { useEffect, useState } from "react";
// import { useParams, Link, useLocation } from "react-router-dom";
// import OrderService from "../../../services/OrderService";
// import { FaArrowLeft } from "react-icons/fa";
// import { urlImage } from "../../../config";

// const OrderShow = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [order, setOrder] = useState(location.state?.order || null); // Nhận order từ state

//   // Fetch the order details when the component mounts
//   useEffect(() => {
//     const fetchOrder = async () => {
//       if (!order) {
//         try {
//           const result = await OrderService.show(id);
//           console.log("Fetched order:", result);
//           setOrder(result.order || null);
//         } catch (error) {
//           console.error("Error fetching order details:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false); // Nếu order đã có thì không cần tải lại
//       }
//     };
//     fetchOrder();
//   }, [id, order]);

//   if (loading) {
//     return <p>Loading order details...</p>;
//   }

//   if (!order) {
//     return <p>Order not found.</p>;
//   }

//   // Kiểm tra nếu items tồn tại và là một mảng
//   const orderItems = Array.isArray(order.items) ? order.items : [];

//   return (
//     <div className="container py-5">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1>Order #{order?.id || "N/A"}</h1>
//         <Link to="/admin/order" className="btn btn-primary">
//           <FaArrowLeft /> Back to Orders
//         </Link>
//       </div>
//       <div className="card">
//         <div className="card-body">
//           <h2>Delivery Information</h2>
//           <p><strong>Name:</strong> {order?.delivery_name || "N/A"}</p>
//           <p><strong>Email:</strong> {order?.delivery_email || "N/A"}</p>
//           <p><strong>Phone:</strong> {order?.delivery_phone || "N/A"}</p>
//           <p><strong>Address:</strong> {order?.delivery_address || "N/A"}</p>
//           <p><strong>Note:</strong> {order?.note || "N/A"}</p>
//           <p><strong>Status:</strong> {order?.status ? "Completed" : "Pending"}</p>

//           <h2 className="mt-4">Order Items</h2>
//           <table className="table table-bordered">
//             <thead>
//               <tr className="bg-light">
//                 <th>Image</th>
//                 <th>Product Name</th>
//                 <th className="text-center">Quantity</th>
//                 <th className="text-center">Price</th>
//                 <th className="text-center">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orderItems.map((item) => (
//                 <tr key={item.product_id}>
//                   <td>
//                     <img
//                       className="img-fluid"
//                       src={`${urlImage}products/${item.image}`}
//                       alt={item.name}
//                     />
//                   </td>
//                   <td className="align-middle">{item.name}</td>
//                   <td className="text-center align-middle">{item.qty}</td>
//                   <td className="text-center align-middle">
//                     {item.price.toFixed(2)}
//                   </td>
//                   <td className="text-center align-middle">
//                     {(item.price * item.qty).toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td colSpan="4" className="text-end">
//                   <strong>Subtotal:</strong>
//                 </td>
//                 <td className="text-center">
//                   <strong>{(orderItems.reduce((total, item) => total + (item.price * item.qty), 0)).toFixed(2)}</strong>
//                 </td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderShow;
import React, { useEffect, useState } from "react";
import "../../../css/order.css"; // CSS phù hợp cho giao diện
import { urlImage } from "../../../config";
import OrderService from "../../../services/OrderService";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderShow = () => {
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

 

  return (
    <div className="order-details container">
      <h2>All orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-item mb-5">
          <h3>Order #{order.id}</h3>
          <Link to="/admin/order" className="btn btn-primary">
         <FaArrowLeft /> Back to Orders
         </Link>
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
           
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderShow;
