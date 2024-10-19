const db = require('../config/db');

const Cart = {
  addToCart: (cart, result) => {
    const sql = "SELECT * FROM db_product WHERE id = ? AND status = 1";

    db.query(sql, [cart.product_id], (err, data) => {
      if (err) {
        console.error("Error querying product:", err);
        return result(err, null);
      }

      if (data.length === 0) {
        return result({ message: "Product not found or inactive" }, null);
      }

      const insertSql = `
        INSERT INTO db_cart (product_id, qty) 
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE qty = qty + ?
      `;

      db.query(insertSql, [cart.product_id, cart.qty, cart.qty], (err, insertResult) => {
        if (err) {
          console.error("Error inserting into cart:", err);
          return result(err, null);
        }
        result(null, { message: "Product added to cart", cartId: insertResult.insertId });
      });
    });
  },

  getCart :(result) => {
    const sql = `
   SELECT 
  cart.product_id, 
  products.name, 
  products.price, 
  cart.qty AS qty, 
  (products.price * cart.qty) AS total_price, 
  products.image
FROM db_cart AS cart
JOIN db_product AS products ON cart.product_id = products.id;

    `;
  
    db.query(sql, (err, data) => {
      if (err) {
        console.error("SQL Query Error:", err);
        return result(err, null);
      }else{
        result(null,data);
      }
     
    });
  },
  delete: (product_id, mycallback) => {
    const sql = `DELETE FROM db_cart WHERE product_id = ?`; // Use ? to avoid SQL injection
    db.query(sql, [product_id], function (err, result) {
        if (err) {
            console.error("Error deleting item:", err);
            return mycallback(null, err); // Pass the error to the callback
        }
        mycallback(`Successfully deleted item with ID: '${product_id}'`, null);
    });
},
update: (cart, product_id, mycallback) => {
  var sql = `UPDATE db_cart SET ? WHERE product_id = ?`;

  db.query(sql, [cart, product_id], function (err, result) {
      if (err) {
          console.error("Error updating cart item:", err);
          return mycallback({ error: "Failed to update cart item.", details: err });
      }
      mycallback(null, result);
  });
},


};

module.exports = Cart;
