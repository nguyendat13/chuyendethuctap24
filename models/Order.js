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
    },
    show: (id, result) => {
        const sql = `SELECT * FROM db_order WHERE id = ? LIMIT 1`; // Use parameterized query to prevent SQL injection
        db.query(sql, [id], (err, rows) => {
            if (err) {
                console.error("Database error:", err); // Log the error for debugging
                result(null); // Pass null to indicate an error occurred
            } else {
                result(rows.length > 0 ? rows[0] : null); // Return the first row or null if not found
            }
        });
    },
    
}

module.exports=Order