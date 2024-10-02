const Post =require('../models/Post')
const PostController={
    getAll:async(req,res)=>{
        await Post.getAll(function(posts){
            const result={
                posts:posts,
                status:true,
                message:"tai du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id=req.params.id
        await Post.delete(id,function(post){
            const result={
                post:post,
                status:true,
                message:"xoa thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
            image.mv("./assets/images/posts/" + image.name, function (error) {
              if (error) throw error;
            });
        let d = new Date();
        //Lấy dũ liệu form
        const post = {
          title:formBody.title,
          type:formBody.type,
          image:image.name,
          description: formBody.description,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
        await Post.store(post, function (data) {
          const result = {
            post: post,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
}
module.exports=PostController