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
    },
    getList: (result) => {
      const sql=  "SELECT * FROM db_post WHERE type = 'post' ORDER BY created_at DESC"
        db.query(sql,(err, post) => {
            if (err) {
              result(null);
            } else {
              result(post);
            }
          }
        );
      },
      getBySlug: async (slug, mycallback) => {
        const sql = `SELECT * FROM db_post WHERE slug='${slug}' LIMIT 1`;
        await db.query(sql, function (err, post) {
          if (err) {
            mycallback(err);
          } else {
            mycallback(post[0]);
          }
        });
      },
      getListOther: async (topic_id, id, limit, mycallback) => {
        const sql = `SELECT * FROM db_post WHERE  topic_id = ${topic_id} AND status='1' AND id!='${id}'  ORDER BY created_at DESC LIMIT ${limit}`;
        // console.log(sql);
        await db.query(sql, function (err, posts) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(posts);
          }
        });
      },
      getListNew: (limit, mycallback) => {
        const sql = `SELECT * FROM db_post WHERE status='1' and  type = 'post' ORDER BY created_at DESC LIMIT ${limit}`;
        db.query(sql, function (err, posts) {
          if (err) {
            mycallback(null);
          } else {
            mycallback(posts);
          }
        });
      },
}
module.exports=Post 