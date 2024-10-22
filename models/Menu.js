const db=require('../config/db')
const Menu ={
    getAll:(mycallback)=>{
        const sql=`SELECT * FROM db_menu ORDER BY created_at DESC`
        db.query(sql,function(err,menus){
            if(err){
                mycallback(null)
            }else{
                mycallback(menus)
            }
        })
    },
    delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_menu WHERE id='${id}'`
        db.query(sql,function(err,menus){
            if(err){mycallback(null)}
            else {mycallback(`Xoa thanh cong '${id}'`)}
        })
    },
    store: (menu, mycallback) => {
        var sql = "INSERT INTO db_menu SET ?";
        db.query(sql, menu, function (err, data) {
          if (err) {
            mycallback(err);
          } else {
            mycallback(data);
          }
        });
      },
      // Updated method using a parameterized query to avoid SQL injection.
getList: (parentId, limit, callback) => {
  const sql = "SELECT * FROM db_menu WHERE parent_id = ? LIMIT ?";
  db.query(sql, [parentId, limit], (err, menu) => {
    if (err) {
      console.error("Database query error:", err);
      return callback(null); // Return null if an error occurs.
    }
    callback(menu); // Return the fetched menu data.
  });
},

}

module.exports=Menu