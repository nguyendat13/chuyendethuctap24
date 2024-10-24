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
      try {
        const formBody = req.body;
        // let imageName = ""; // Default empty string for optional image
    
        // // Check if an image file was uploaded
        // if (req.files && req.files.image) {
        //   let image = req.files.image;
        //   imageName = image.name;
    
        //   // Move the image to the destination folder
        //   await new Promise((resolve, reject) => {
        //     image.mv(`./assets/images/orders/${image.name}`, (error) => {
        //       if (error) return reject(error);
        //       resolve();
        //     });
        //   });
        // }
    
        let d = new Date();
    
        // Prepare the order object with form data
        const order = {
          delivery_name: formBody.delivery_name,
          delivery_email: formBody.delivery_email,
          delivery_phone: formBody.delivery_phone,
          delivery_address: formBody.delivery_address,
          delivery_gender: formBody.delivery_gender,
          note: formBody.note,
          type: formBody.type,
          // image: imageName, // Use the image name (empty if no image)
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}
                       ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        };
    
        // Store the order in the database
        await Order.store(order, (data) => {
          const result = {
            order: order,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
      } catch (error) { 
        console.error(error);
        return res.status(500).json({
          status: false,
          message: "Có lỗi xảy ra trong quá trình thêm đơn hàng.",
        });
      }
    },
    show: (req, res) => {
      const id = req.params.id; // Extract ID from the request parameters
  
      Order.show(id, (data) => {
          if (!data) {
              return res.status(404).json({ // Use 404 status for "not found"
                order: null,
                  status: false,
                  message: "Order not found",
              });
          }
  
          return res.status(200).json({
              order: data,
              status: true,
              message: "Data loaded successfully",
          });
      });
  },
  
}
module.exports=OrderController