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
}

module.exports=Menu