const Brand =require('../models/Brand')

const BrandController ={
    getAll: async(req,res) =>{
        try{
            await Brand.getAll(function(brands){
            const result={
                brands:brands,
                status:true,
                message:'tai du lieu thanh cong'
            }
            return res.status(200).json(result)
            })
        }catch(error){
            const result={
                brands:null,
                status:false,
                message:error.message
            }
        return res.status(200).json(result)
    }
    },
    delete:async(req,res)=>{
        const id=req.params.id
        await Brand.delete(id,function(brand){
            const result={
                brand:brand,
                status:true,
                message:"xóa thành công"
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
        image.mv("./assets/images/brands/" + image.name, function (err, data) {
          if (err) throw err;
        });
        let d = new Date();
        //Lấy dũ liệu form
        const brand = {
            image: image.name,
          name: formBody.name,
          slug: formBody.slug,
          sort_order: 0,
          description: formBody.description,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} 
          ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
         await Brand.store(brand, function (data) {
          //data thứ mà nó trả về
          const result = {
            brand: brand,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
    },
}

module.exports=BrandController