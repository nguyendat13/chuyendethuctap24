const db=require('../config/db')
const Product ={
    getAll:(mycallback)=>{
        const sql=`SELECT * FROM db_product WHERE status='1'
         ORDER BY created_at DESC `
        db.query(sql,function(err,products){
            if(err){mycallback(null)}
            else{mycallback(products)}
        })
    },
    delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_product WHERE id=${id}`
        db.query(sql,function(err,product){
            if(err){mycallback(null)}
            else{mycallback(`xoa thanh cong ${id}`)}
        })
    },
    store:(product,mycallback)=>{
        const sql=`INSERT INTO db_product SET ?`
        db.query(sql,product,function(err,data){
            if(err){mycallback(null)}
            else{mycallback(data)}
        })
    }
}

module.exports=Product