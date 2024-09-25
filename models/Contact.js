const db =require('../config/db')

const Contact ={
    getAll:(mycallback)=>{
        const sql=`SELECT * FROM db_contact ORDER BY created_at DESC `
        db.query(sql,function(err,contacts){
            if(err){ mycallback(null)}    
            else{ mycallback(contacts)}      
        })
    },
    delete:(id,mycallback)=>{
        const sql=`DELETE FROM db_contact WHERE id='${id}' `
        db.query(sql,function(err,contact){
            if(err){mycallback(null)}
            else {mycallback(`Xoa thanh cong '${id}'`)}
        })
    },
    store:(contact,mycallback)=>{
        const sql =`INSERT INTO db_contact SET ?`
        db.query(sql,contact,function(err,data){
            if(err){mycallback(err)}
            else {mycallback(data)}
        })
    }
}
module.exports=Contact