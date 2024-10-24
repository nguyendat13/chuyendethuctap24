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
  getUser:(user,mycallback)=>{
    const sql = `SELECT * FROM db_user WHERE email = ? AND password =?`;
    db.query(sql, [user.email, user.password], (err, data) => {
      if (err) {
        mycallback(err); // Handle error appropriately (e.g., log, display message)
      } else if (data.length > 0) {
        // Successful login
        mycallback(null, data[0]); // Pass the user data as the second argument
      } else {
        // Login failed
        mycallback(new Error('Invalid email or password'));
      }
    });
  }
}
module.exports=User