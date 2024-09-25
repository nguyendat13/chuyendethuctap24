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
    }
}
module.exports=User