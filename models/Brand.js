const db =require('../config/db')
const Brand ={
    getAll:(mycallback) => {
       const sql=`SELECT * FROM db_brand ORDER BY created_at DESC`
       db.query(sql,function(err,brands){
        if(err){
            mycallback(null)
        }
        else{
            mycallback(brands)
        }
       })
    },
    delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_brand WHERE id=${id}`
        db.query(sql,function(err,brand){
            if(err){mycallback(null)}
            else{mycallback(`Xóa thành công '${id}'`)}
        })
    },
    store: (brand, mycallback) => {
        var sql = "INSERT INTO db_brand SET ?";
        db.query(sql, brand, function (err, data) {
          if (err) {
            mycallback(err);
          } else {
            mycallback(data);
          }
        });
      },
}

module.exports=Brand