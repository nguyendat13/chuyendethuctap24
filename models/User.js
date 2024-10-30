const db=require('../config/db')
const User ={
    getAll:(mycallback)=>{
        const sql=`SELECT * FROM db_user ORDER BY created_at DESC`
        db.query(sql,function(err,users){
            if(err){mycallback(null)}
            else{mycallback(users)}
        })
    },
    delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_user WHERE id=${id}`
        db.query(sql,function(err,user){
            if(err){mycallback(null)}
            else{mycallback(`xoa thanh cong ${id}`)}
        })
    },
    store: (user, mycallback) => {
      var sql = "INSERT INTO db_user SET ?";
      db.query(sql, user, function (err, result) {
        if (err) {
          mycallback(err);
        } else {
          mycallback(result);
        }
      });
    },
    checkUser:(email, phone, callback)=> {
      const sql = "SELECT * FROM db_user WHERE email = ? OR phone = ?"; // Câu truy vấn để kiểm tra sự tồn tại của email hoặc số điện thoại
      db.query(sql, [email, phone], (err, result) => {
          if (err) {
              callback(err); // Gọi callback với lỗi nếu có
          } else {
              callback(null, result); // Gọi callback với kết quả nếu thành công
          }
      });
  },

    login: (user, myCallback) => {
      const sql = `SELECT * FROM db_user WHERE email = ? AND password =?`;
      db.query(sql, [user.email, user.password], (err, data) => {
        if (err) {
          myCallback(err); // Handle error appropriately (e.g., log, display message)
        } else if (data.length > 0) {
          // Successful login
          myCallback(null, data[0]); // Pass the user data as the second argument
        } else {
          // Login failed
          myCallback(new Error('Invalid email or password'));
        }
      });
      },

     

      show: (id, result) => {
        const sql = `SELECT * FROM db_user WHERE id = ? LIMIT 1`; // Sử dụng câu truy vấn có tham số
        db.query(sql, [id], (err, rows) => {
            if (err) {
                console.error("Database error:", err);
                return result(null); // Báo lỗi bằng cách trả về null
            }
            result(rows.length > 0 ? rows[0] : null); // Nếu có kết quả, trả về dòng đầu tiên
        });
    },
    checkDuplicate: (email, phone, callback) => {
      const sql = `SELECT * FROM db_user WHERE email = ? OR phone = ? LIMIT 1`;
      db.query(sql, [email, phone], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.length > 0); // true nếu tìm thấy
      });
    },

  findEmail :(email) => {
    const sql = 'SELECT * FROM db_user WHERE email = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [email], (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) return resolve(null); // No user found
        resolve(result[0]); // Return the user object
      });
    });
  },
  updatePassword :(user,mycallback)=>{
    const sql =`UPDATE db_user SET password =? WHERE id=?`
    db.query(sql,[user.id,user.password],(err,result)=>{
      if(err){mycallback(er)}
      else{mycallback(result)}
    })
  },


}
module.exports=User