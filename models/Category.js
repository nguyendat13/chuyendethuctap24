const db=require("../config/db")

const Category={
    getAll: (mycallback) => {
      const sql=`SELECT * FROM db_category ORDER BY created_at DESC`;
        db.query(sql, function(err, categorys){
          if (err) {
            mycallback(null);
          } else {  
            mycallback(categorys);
          }
        });
      },
      edit:(category,id,mycallback)=>{
        const sql=`UPDATE db_category SET ? WHERE id='${id}'`
        db.query(sql,category,function(err,data){
          if(err){
            mycallback(err)
          }
          else{
            mycallback(data)
          }
        })
      },
   
      show:(id,mycallback)=>{
        const sql=`SELECT * FROM db_category WHERE id='${id}'`
        db.query(sql,function(err,category) {
          if(err) {
            mycallback(null)
          } else{
            mycallback(category)
          }
        })
      }, 
      store: (category, mycallback) => {
        var sql = "INSERT INTO db_category SET ?";
        db.query(sql, category, function (err, data) {
          if (err) {
            mycallback(err);
          } else {
            mycallback(data);
          }
        });
      },
      delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_category WHERE id='${id}'`
        db.query(sql,function(err,category){
          if(err){
            mycallback(null)
          } 
          else{
            mycallback(`Xoa thanh cong '${id}'`)
          }
        })
      },
      //trang nguoi dung
      getList: (parentid, mycallback) => {
        const sql = `SELECT * FROM db_category WHERE parent_id ='${parentid}' AND status='1'`;
        db.query(sql, function (err, categorys) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(categorys);
          }
        });
      },
    }
module.exports=Category