const Cart = require('../models/Cart');

const CartController = {
  addToCart: async (req, res) => {
    const productId = req.params.id;
    const { qty } = req.body; // Assuming quantity is sent in the body

    const cartItem = { product_id: productId, qty };

    Cart.addToCart(cartItem, (err, result) => {
      if (err) {
        console.error("Error adding to cart:", err);
        return res.status(500).json({ status: false, message: err.message });
      }
      res.status(201).json({ status: true, result, message: "Added to cart successfully" });
    });
  },

  getCart: (req, res) => {
    Cart.getCart((err, products) => {
      if (err) {
        console.error("Error fetching cart:", err);
        return res.status(500).json({ status: false, message: "Failed to fetch cart" });
      }
      res.status(200).json({ status: true, product: products, message: "Cart fetched successfully" });
    });
  },
  delete: async (req, res) => {
    const product_id = req.params.product_id;

    await Cart.delete(product_id, (message, error) => {
        if (error) {
            return res.status(500).json({
                status: false,
                message: "Failed to delete item",
                error: error.message,
            });
        }
        const result = {
            status: true,
            cart: message,
            message: "Item deleted successfully",
        };
        return res.status(200).json(result);
    });
},
updateCartItem: (req, res) => {
  const { product_id } = req.params;
  const cartData = req.body;

  Cart.update(cartData, product_id, (err, result) => {
      if (err) {
          return res.status(500).json({ message: err.error || "Internal Server Error" });
      }
      return res.status(200).json({ message: "Cart item updated successfully", result });
  });
},

  
};

module.exports = CartController;
