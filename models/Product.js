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
    },
    //trang nguoi dung
    getList: async (limit, offset, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE status='1' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
        await db.query(sql, function (err, products) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(products);
          }
        });
      },
    getBySlug:async(slug,mycallback)=>{
      const sql= `SELECT * FROM db_product WHERE slug='${slug}'`
      await db.query(sql,function(err,product){
        if(err){mycallback(err)}
        else{mycallback(product[0])}
      })
    },
    getProductDetail:async(categoryid,id,limit,mycallback)=>{
      const sql=`SELECT * FROM db_product WHERE category_id='${categoryid}' AND status='1' AND id!='${id}' ORDER BY created_at DESC LIMIT ${limit}`
      await db.query(sql,function(err,products){
        if(err){mycallback(null)}
        else{mycallback(products)}
      })
    },
    getListByCategory: (categoryid, limit, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE category_id ='${categoryid}' AND status='1' LIMIT ${limit}`;
      db.query(sql, function (err, products) {
        if (err) {
          mycallback(null);
        } else {
          mycallback(products);
        }
      });
    },
    getListByBrand: (brandid, limit, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE brand_id ='${brandid}' AND status='1' LIMIT ${limit}`;
      db.query(sql, function (err, products) {
        if (err) {
          mycallback(null);
        } else {
          mycallback(products);
        }
      });
    },
    getListProductCategory: async (categoryid, limit, offset, mycallback) => {
      const sql = `SELECT * FROM db_product WHERE status='1' AND category_id='${categoryid}' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
      await db.query(sql, function (err, products) {
        if (err) {
          mycallback(null);
        } else {
          mycallback(products);
        }
      });
    },
    edit: (product, id, mycallback) => {
      var sql = `UPDATE db_product SET ? WHERE id = '${id}'`;
      db.query(sql, product, function (err, result) {
        if (err) {
          mycallback(err);
        } else {
          mycallback(result);
        }
      });
    },
    show: (id, result) => {
      const sql = `SELECT * FROM db_product WHERE id='${id}' LIMIT 1`;
      db.query(sql, function (err, product, fields) {
        if (err) {
          result(null);
        } else {
          result(product);
        }
      });
    },
 
}
module.exports=Product