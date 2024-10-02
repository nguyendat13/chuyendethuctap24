const db=require('../config/db')
const Topic={
    getAll:(mycallback)=>{
        const sql=`SELECT * FROM db_topic ORDER BY created_at DESC`
        db.query(sql,function(err,topics){
            if(err){mycallback(null)}
            else{mycallback(topics)}
        })
    },
    delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_topic WHERE id=${id}`
        db.query(sql,function(err,topic){
            if(err){mycallback(null)}
            else{mycallback(`xoa thanh cong ${id}`)}
        })
    },
    store: (topic, mycallback) => {
        var sql = "INSERT INTO db_topic SET ?";
        db.query(sql, topic, function (err, data) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(data);
          }
        });
      },
}
module.exports=Topic