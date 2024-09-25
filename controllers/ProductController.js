const Product =require('../models/Product')
const ProductController ={
    getAll:async(req,res)=>{
     
        await Product.getAll(function(products){
            const result={
                products:products,
                status:true,
                message:"tai du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id= req.params.id
        await Product.delete(id,function(product){
            const result={
                product:product,
                status:true,
                message:'xoa thanh cong'
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
            image.mv("./assets/images/products/" + image.name, function (error) {
              if (error) throw error;
            });
        let d = new Date();
        //Lấy dũ liệu form
        const product = {
          name: formBody.name,
          image:image.name,
          category_id:formBody.category_id,
          brand_id:formBody.brand_id,
          detail:formBody.detail,
          description: formBody.description,
          price:formBody.price,
          pricesale:formBody.pricesale,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
        Product.store(product, function (data) {
          const result = {
            product: product,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
}
module.exports=ProductController