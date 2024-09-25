const db=require('../config/db')
const Post={
    getAll:(mycallback)=>{
        const sql =`SELECT * FROM db_post ORDER BY created_at DESC`
        db.query(sql,function(err,posts){
            if(err){mycallback(null)}
            else{mycallback(posts)}
        })
    },
    delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_post WHERE id=${id}`
        db.query(sql,function(err,post){
            if(err){mycallback(null)}
            else{mycallback(`xoa thanh cong ${id}`)}
        })
    },
    store:(post,mycallback)=>{
        const sql=`INSERT INTO db_post SET ?`
        db.query(sql,post,function(err,data){
            if(err){mycallback(err)}
            else{mycallback(data)}
        })
    }
}
module.exports=Post