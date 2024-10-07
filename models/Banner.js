const db=require("../config/db")

const Banner={
    getAll: (mycallback) => {
      const sql=`SELECT * FROM db_banner ORDER BY created_at DESC`;
        db.query(sql, function(err, banners){
          if (err) {
            mycallback(null);
          } else {
            mycallback(banners);
          }
        });
      },
    delete:(id,mycallback)=>{
      const sql=`DELETE FROM db_banner WHERE id='${id}'`
      db.query(sql,function(err,banner){
        if(err){
          mycallback(null)
        } 
        else{
          mycallback(`Xoa thanh cong '${id}'`)
        }
      })
    },
    edit:(banner,id,mycallback)=>{
      const sql=`UPDATE db_banner SET ? WHERE id='${id}'`
      db.query(sql,banner,function(err,data){
        if(err){
          mycallback(null)
        }
        else{
          mycallback(data)
        }
      })
    },
    show:(id,mycallback)=>{
      const sql=`SELECT * FROM db_banner WHERE id='${id}'`
      db.query(sql,function(err,banner) {
        if(err) {
          mycallback(null)
        } else{
          mycallback(banner)
        }
      })
    },
    store: (banner, mycallback) => {
      var sql = "INSERT INTO db_banner SET ?";
      db.query(sql, banner, function (err, data) {
        if (err) {
          mycallback(err);
        } else {
          mycallback(data);
        }
      });
    },
    // updateStatus:(status,mycallback)=>{
    //   const sql=`UPDATE db_banner SET ? WHERE status='${status}'`
    //   db.query(sql,function(err,banner){
    //     if(err || status != 1){
    //       mycallback(null)
    //     }{
    //       mycallback(banner)
    //     }
    //   })
    // }
}
module.exports=Banner;

