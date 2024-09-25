const Order =require('../models/Order')
const OrderController ={
    getAll:async(req,res)=>{
        await Order.getAll(function(orders){
            const result={
                orders:orders,
                status:true,
                message:"tai du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id=req.params.id
        await Order.delete(id,function(order){
            const result={
                order:order,
                status:true,
                message:`Xoa thanh cong `
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
            image.mv("./assets/images/orders/" + image.name, function (error) {
              if (error) throw error;
            });
        let d = new Date();
        //Lấy dũ liệu form
        const order = {
          delivery_name: formBody.delivery_name,
          delivery_email: formBody.delivery_email,
          delivery_phone: formBody.delivery_phone,
          delivery_address: formBody.delivery_address,
          note: formBody.note,          
          image:image.name, 
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        };
        Order.store(order, function (data) {
          const result = {
            order: order,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
}
module.exports=OrderController