const db=require('../config/db')
const bcrypt = require("bcrypt");
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


    login: (email, callback) => {
      const sql = 'SELECT * FROM db_user WHERE email = ?';
      db.query(sql, [email], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0]);
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
  // Method to check if an email exists
  checkEmail: (user, callback) => {
    const sql = `SELECT COUNT(*) AS count FROM db_user WHERE email = ?`;
    db.query(sql, [user.email], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return callback(null);
        } 
        const exists = results[0].count > 0;
        callback(exists);
    });
},

// Method to check if a phone number exists
checkPhone: (user, callback) => {
    const sql = `SELECT COUNT(*) AS count FROM db_user WHERE phone = ?`;
    db.query(sql, [user.phone], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return callback(null);
        }
        const exists = results[0].count > 0;
        callback(exists);
    });
},

}
module.exports=User