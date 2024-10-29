// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Lấy token từ header
  
  if (!token) {
    return res.status(403).json({ message: "No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized." });
    }
    req.user = decoded; // Lưu thông tin người dùng đã xác thực vào req
    next(); // Chuyển tiếp đến route tiếp theo
  });
};

module.exports = { authenticate };
