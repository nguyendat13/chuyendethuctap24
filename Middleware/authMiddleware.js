// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware để xác thực JWT token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Lấy token từ Header

  if (!authHeader) {
    return res.status(403).json({ status: false, message: "Access denied. No token provided." });
  }

  const token = authHeader.split(' ')[1]; // Bỏ chữ "Bearer " nếu có

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ status: false, message: "Invalid or expired token." });
    }
    req.user = user; // Lưu thông tin người dùng vào req.user
    next(); // Tiếp tục đến route tiếp theo
  });
};

module.exports = authenticateJWT;
