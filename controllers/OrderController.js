const Order = require("../models/Order");
const OrderController = {
  getAll: async (req, res) => {
    await Order.getAll(function (orders) {
      const result = {
        orders: orders,
        status: true,
        message: "tai du lieu thanh cong",
      };
      return res.status(200).json(result);
    });
  },
  delete: async (req, res) => {
    const id = req.params.id;
    await Order.delete(id, function (order) {
      const result = {
        order: order,
        status: true,
        message: `Xoa thanh cong `,
      };
      return res.status(200).json(result);
    });
  },
  store: async (req, res) => {
    try {
      const formBody = req.body;
      let d = new Date();

      // Prepare the order object with form data
      const order = {
        delivery_name: formBody.delivery_name,
        delivery_email: formBody.delivery_email,
        delivery_phone: formBody.delivery_phone,
        delivery_address: formBody.delivery_address,
        delivery_gender: formBody.delivery_gender, // Ensure this is sent from frontend
        note: formBody.note,
        type: formBody.type || "default_type",
        status: formBody.status,
        created_at: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}
                      ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };

      // Assuming Order.store handles the DB insertion
      const result = await Order.store(order); // Ensure this returns the inserted order with id

      if (result) {
        // Add the order ID to the response
        order.id = result.insertId; // Assuming insertId is returned from the DB
        return res.status(200).json({
          order,
          status: true,
          message: "Thêm dữ liệu thành công!",
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "Failed to add order to the database.",
        });
      }
    } catch (error) {
      console.error("Error while adding order:", error);
      return res.status(500).json({
        status: false,
        message: "Có lỗi xảy ra trong quá trình thêm đơn hàng.",
      });
    }
  },

  show: (req, res) => {
    const id = req.params.id; // Extract ID from the request parameters

    Order.show(id, (data) => {
      if (!data) {
        return res.status(404).json({
          // Use 404 status for "not found"
          order: null,
          status: false,
          message: "Order not found",
        });
      }

      return res.status(200).json({
        order: data,
        status: true,
        message: "Data loaded successfully",
      });
    });
  },
  edit: async (req, res) => {
    try {
      const id = req.params.id; // Lấy ID từ URL params
      let bodyData = req.body;  // Lấy dữ liệu từ request body

      // Cấu trúc lại dữ liệu cần cập nhật
      let d = new Date();
      const order = {
        delivery_name: bodyData.delivery_name,
        delivery_email: bodyData.delivery_email,
        delivery_phone: bodyData.delivery_phone,
        delivery_address: bodyData.delivery_address,
        note: bodyData.note,
        order_status: bodyData.order_status,
        updated_at: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        updated_by: 1,  // Thay đổi tùy thuộc vào user đăng nhập
      };

      // Gọi hàm edit trong model Order để cập nhật dữ liệu
      await Order.edit(order, id, (error, result) => {
        if (error) {
          throw new Error("Lỗi khi cập nhật order: " + error.message);
        }

        const response = {
          order: order,
          status: true,
          message: "Cập nhật đơn hàng thành công!",
        };
        return res.status(200).json(response);
      });
    } catch (error) {
      const response = {
        order: null,
        status: false,
        message: error.message,
      };
      return res.status(500).json(response);
    }
  },
};
module.exports = OrderController;
