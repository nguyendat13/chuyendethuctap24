const User=require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../node_modules/utils/sendEmail');
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, roles: user.roles },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};
const UserController ={

    getAll:async(req,res)=>{
        await User.getAll(function(users){
            const result={
                users:users,
                status:true,
                message:"tai du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id= req.params.id
        await User.delete(id,function(user){
            const result={
                user:user,
                status:true,
                message:"xóa thành công"
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
      try {
        const formBody = req.body;
        let image = req.files.image;
        image.mv("./assets/images/users/" + image.name, function (err, result) {
          if (err) throw err;
        });
        let d = new Date();
        //Lấy dũ liệu form
        const user = {
          name: formBody.name,
          email: formBody.email,
          gender: formBody.gender,
          phone: formBody.phone,
          username: formBody.username,
          password: formBody.password,
          repassword:formBody.repassword,
          address: formBody.address,
          image:image.name,
          // roles: formBody.roles,
          created_by: 1,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        };
        await User.store(user, function (data) {
          //data thứ mà nó trả về
          const result = {
            user: user,
            status: true,
            message: "Thêm dữ liệu thành công!",
            
          };
          return res.status(200).json(result);
        });
      } catch (error) {
        const result = {
          user: null,
          status: false,
          message: error.message,
        };
        return res.status(200).json(result);
      }
    }, 
    
    
    login: async (req, res) => {
      try {
        const { email, password } = req.body;
  
        if (!email || !password) {
          return res.status(400).json({ status: false, message: 'Email and password are required' });
        }
  
        User.login(email, async (err, user) => {
          if (err) {
            return res.status(500).json({ status: false, message: 'Server error' });
          }
          if (!user) {
            return res.status(401).json({ status: false, message: 'Invalid credentials' });
          }
  
          // Kiểm tra mật khẩu
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(401).json({ status: false, message: 'Invalid credentials' });
          }
  
          // Tạo token và trả về thông tin người dùng
          const token = generateToken(user);
          res.status(200).json({
            status: true,
            message: 'Login successful',
            user: { id: user.id, email: user.email },
            token,
          });
        });
      } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ status: false, message: 'Internal server error' });
      }
    },
    
    
    
    forgotPassword :async (req, res) => {
      const { email } = req.body;
      try {
          const user = await User.findEmail(user);
          if (!user) return res.status(404).json({ message: 'User not found' });
  
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          const link = `http://localhost:3000/home/reset_password`;
          
          await sendEmail(email, 'Reset Password', `Click here to reset your password: ${link}`);
          
          res.status(200).json({ message: 'Email sent' });
      } catch (err) {
          res.status(500).json({ message: 'Server error' });
      }    
  },
  resetPassword: async (req, res) => {
    const { token, newPassword } = req.body;
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      if (!decoded.id) {
        return res.status(401).json({ message: "Invalid token" });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await User.updatePassword(decoded.id, hashedPassword);
  
      res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
      console.error("Reset password error:", err);
      res.status(500).json({ message: 'Invalid or expired token' });
    }
  },
  
  checkEmail: async (req, res) => {
    const { email } = req.query;
    try {
      const exists = await User.checkEmail(email);
      res.status(200).json({ exists, message: exists ? "Email already exists." : "Email is available." });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  },
  
  checkPhone: async (req, res) => {
    const { phone } = req.query;
    try {
      const exists = await User.checkPhone(phone);
      res.status(200).json({ exists, message: exists ? "Phone number already exists." : "Phone number is available." });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  },
}
module.exports=UserController