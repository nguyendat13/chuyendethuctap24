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
          detail:formBody.detail,
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
      list:async (req, res) => {
        await Post.getList(function(post){
          const result={
              posts:post,
              status:true,
              message:"tai du lieu thanh cong"
          }
          return res.status(200).json(result)
      })
      },
      postdetail: async (req, res) => {
        try {
          const slug = req.params.slug;
          const limit = req.params.limit;
          await Post.getBySlug(slug, function (post) {
            if (post == null) {
              const result = {
                posts: null,
                status: false,
                message: "Không tìm thấy thông tin!",
              };
              return res.status(200).json(result);
            } else {
              Post.getListOther(post.topic_id, post.id, limit, function (posts) {
                const result = {
                  post: post,
                  posts: posts,
                  status: true,
                  message: "Tải dữ liệu thành công!",
                };
                return res.status(200).json(result);
              });
            }
          });
        } catch (error) {
          const result = {
            posts: null,
            status: false,
            message: error.message,
          };
          return res.status(200).json(result);
        }
      },
      listnew: async (req, res) => {
        try {
          const limit = req.params.limit;
          //
          await Post.getListNew(limit, function (posts) {
            if (posts == null) {
              const result = {
                posts: null,
                status: false,
                message: "Không tìm thấy thông tin!",
              };
              return res.status(200).json(result);
            } else {
              const result = {
                posts: posts,
                status: true,
                message: "Tải dữ liệu thành công!",
              };
              return res.status(200).json(result);
            }
          });
        } catch (error) {
          const result = {
            posts: null,
            status: false,
            message: error.message,
          };
          return res.status(200).json(result);
        }
      },
     
}
module.exports=PostController