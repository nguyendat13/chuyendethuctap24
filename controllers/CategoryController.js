const Category =require("../models/Category")
const CategoryController={
    getAll:async(req,res)=>{
        try{ 
            await Category.getAll(function(categorys){
            const result={
                categorys:categorys,
                status:true,
                message:"tai du lieu thanh cong"    
            }
            return res.status(200).json(result)
            })
            }catch(error){
                const result={
                    categorys:null,
                    status:false,
                    message:error.message,
                }
                return res.status(200).json(result)
            }
       },
    edit: async (req, res) => {
        const id = req.params.id;
        let bodyData = req.body;
            //image
        let image = req.files.image;
        image.mv("./assets/images/categorys/" + image.name, function (err, result) {
            if (err) throw err;
            });
            let d = new Date();
        //object data to stores
        const category = {
            name: bodyData.name,
            slug: myslug(bodyData.name),
            description: bodyData.description,
            image: image.name,
            status: bodyData.status,
            sort_order: bodyData.sort_order,
            parent_id: bodyData.parent_id,
            updated_by: 1,
            updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
            };
            Category.edit(category, id, function (data) {
                const result = {
                category: category,
                status: true,
                message: "Cập nhật dữ liệu thành công!",
                };
            return res.status(200).json(result);
            })
    
         },
  
    show:async(req,res)=>{
    
            const id=req.params.id;
            await Category.show(id,function(category){
                if(category==null){
                    const result={
                        category:null,
                        status:false,
                        message:"khong tim thay",
                    }
                    return res.status(200).json(result)
                }else{
                    const result={
                        category:category,
                        status:true,
                        message:" tim thay",
                    }
                    return res.status(200).json(result)

                }
            })
    },
    store: async (req, res) => {
        const formBody = req.body;
            let image = req.files.image;
            image.mv("./assets/images/categorys/" + image.name, function (err) {
              if (err) throw err;
            });
            let d = new Date();
        //Lấy dũ liệu form
        const category = {
          name: formBody.name,
          parent_id: formBody.parent_id,
          image:image.name,
          slug: formBody.slug,
          sort_order:formBody.sort_order,
          description: formBody.description,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}
           ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
        Category.store(category, function (data) {
          const result = {
            category:category ,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
    delete:async(req,res)=>{
        try{
            const id=req.params.id;
            await Category.delete(id,function(category){
                const result={
                    category:category,
                    status:true,
                    message:"Xoa thanh cong"
                }
                return res.status(200).json(result)
            })
        }
        catch(error){
            const result={
                categorys:null,
                status:false,
                message:error.message
            }
            return res.status(200).json(result)
        }
    },
    //trang nguoi dung
    list: async (req, res) => {
        try {
          const parentid = req.params.parentid;
          await Category.getList(parentid, function (categorys) {
            if (categorys == null) {
              const result = {
                categorys: null,
                status: false,
                message: "Không tìm thấy thông tin!",
              };
              return res.status(200).json(result);
            } else {
              const result = {
                categorys: categorys,
                status: true,
                message: "Tải dữ liệu thành công!",
              };
              return res.status(200).json(result);
            }
          });
        } catch (error) {
          const result = {
            categorys: null,
            status: false,
            message: error.message,
          };
          return res.status(200).json(result);
        }
      },
}

    module.exports=CategoryController