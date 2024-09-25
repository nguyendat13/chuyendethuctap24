const db=require('../config/db')
const Order={
    getAll:(mycallback)=>{
        const sql=`SELECT *FROM db_order ORDER BY created_at DESC`
        db.query(sql,function(err,orders){
            if(err){mycallback(null)}
            else{mycallback(orders)}
        })
    },
    delete:(id,mycallback)=>{
        const sql =`DELETE FROM db_order WHERE id=${id}`
        db.query(sql,function(err,order){
            if(err){mycallback(null)}
            else {mycallback(`Xoa thanh cong ${id}`)}
        })
    },
    store:(order,mycallback)=>{
        const sql=`INSERT INTO db_order SET ?`
        db.query(sql,order,function(err,data){
            if(err){mycallback(null)}
            else{mycallback(data)}
        })
    }
}

module.exports=Order