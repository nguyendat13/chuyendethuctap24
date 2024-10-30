const User=require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../node_modules/utils/sendEmail');


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
            message: "Registered successfully",
            
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
        const { email, password } = req.body; // Không cần lấy id, phone, username, address ở đây
    
        // Kiểm tra xem email và password có trống hay không
        if (!email || !password) {
          return res.status(400).json({
            user: null,
            status: false,
            message: "Email and password cannot be empty",
          });
        }
    
        // Gọi hàm đăng nhập từ User
        User.login({ email, password }, async (err, data) => {
          if (err || !data) {
            return res.status(401).json({
              user: null,
              status: false,
              message: "Invalid email or password",
            });
          }
    
          // Trả về thông tin người dùng đã đăng nhập thành công
          res.status(200).json({
            user: {
              id: data.id, // Giả sử data chứa thông tin người dùng đã đăng nhập
              email: data.email,
              username: data.username,
              phone: data.phone,
              address: data.address,
            },
            status: true,
            message: "Login successful",
          });
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          user: null,
          status: false,
          message: "Internal server error",
        });
      }
    },
    
   
    show: (req, res) => {
      const id = req.params.id;
  
      User.show(id, (data) => {
          if (!data) {
              return res.status(404).json({
                  order: null,
                  status: false,
                  message: "User not found",
              });
          }
  
          return res.status(200).json({
              order: data, // Đúng key để phản hồi
              status: true,
              message: "Data loaded successfully",
          });
      });
  },
  
  checkDuplicate: (req, res) => {
    const { email, phone } = req.body;

    User.checkDuplicate(email, phone, (err, isDuplicate) => {
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Lỗi hệ thống",
        });
      }

      if (isDuplicate) {
        return res.status(200).json({
          status: false,
          message: "Email hoặc số điện thoại đã tồn tại.",
          
        });
      }

      return res.status(200).json({
        status: true,
        message: "Email và số điện thoại hợp lệ.",
      });
    });
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
  
 
}
module.exports=UserController