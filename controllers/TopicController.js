const Topic =require('../models/Topic')
const TopicController={
    getAll:async(req,res)=>{
        await Topic.getAll(function(topics){
            const result={
                topics:topics,
                status:true,
                message:"tai thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id = req.params.id
        await Topic.delete(id,function(topic){
            const result={
                topic:topic,
                status:true,
                message:`xoa thanh cong`
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
            image.mv("./assets/images/topics/" + image.name, function (error) {
              if (error) throw error;
            });
        let d = new Date();
        //Lấy dũ liệu form
        const topic = {
          name: formBody.name,
          image:image.name,
          sort_order: formBody.sort_order,
          description: formBody.description,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
        Topic.store(topic, function (data) {
          const result = {
            topic: topic,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
}

module.exports=TopicController