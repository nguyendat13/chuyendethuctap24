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
    getBySlug: async (slug, mycallback) => {
      const sql = `SELECT * FROM db_brand WHERE slug='${slug}' LIMIT 1`;
      await db.query(sql, function (err, category) {
        if (err) {
          mycallback(err);
        } else {
          mycallback(category);
        }
      });
    },
    getListOther: async (sort_order, id, limit, mycallback) => {
      const sql = `SELECT * FROM db_brand WHERE sort_order = '${sort_order}' AND status='1' AND id!='${id}'  ORDER BY created_at DESC LIMIT ${limit}`;
      // console.log(sql);
      await db.query(sql, function (err, categorys) {
        if (err) {
          mycallback(null);
        } else {
          mycallback(categorys);
        }
      });
    },
}

module.exports=Brand