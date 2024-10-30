const db = require("../config/db");
const Order = {
  getAll: (mycallback) => {
    const sql = `SELECT *FROM db_order ORDER BY created_at DESC`;
    db.query(sql, function (err, orders) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(orders);
      }
    });
  },
  delete: (id, mycallback) => {
    const sql = `DELETE FROM db_order WHERE id=${id}`;
    db.query(sql, function (err, order) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xoa thanh cong ${id}`);
      }
    });
  },
  // Example of how the store method might look
  store: async (order) => {
    const query = `INSERT INTO db_order SET ?`;
    return new Promise((resolve, reject) => {
      db.query(query, order, (error, results) => {
        if (error) {
          reject(error); // Reject with error for proper handling
        } else {
          resolve(results); // Resolve with results for ID or confirmation
        }
      });
    });
  },

  show: (id, result) => {
    const sql = `SELECT * FROM db_order WHERE id = ? LIMIT 1`; // Use parameterized query to prevent SQL injection
    db.query(sql, [id], (err, rows) => {
      if (err) {
        console.error("Database error:", err); // Log the error for debugging
        result(null); // Pass null to indicate an error occurred
      } else {
        result(rows.length > 0 ? rows[0] : null); // Return the first row or null if not found
      }
    });
  },
};

module.exports = Order;
