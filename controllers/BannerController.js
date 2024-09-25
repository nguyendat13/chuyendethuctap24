const Banner =require("../models/Banner")
const BannerController={
    getAll:async(req,res)=>{
        try{ 
            await Banner.getAll(function(banners){
            const result={
                banners:banners,
                status:true,
                message:"tai du lieu thanh cong"    
            }
            return res.status(200).json(result)
            })
            }catch(error){
                const result={
                    banners:null,
                    status:false,
                    message:error.message,
                }
                return res.status(200).json(result)
            }
       },
    // updateStatus:async(req,res)=>{
    //     try{ 
    //         await Banner.updateStatus(function(banner){
    //         const result={
    //             banner:banner,
    //             status:true,
    //             message:"tai du lieu thanh cong"    
    //         }
    //         return res.status(200).json(result)
    //         })
    //         }catch(error){
    //             const result={
    //                 banner:null,
    //                 status:false,
    //                 message:error.message,
    //             }
    //             return res.status(200).json(result)
    //         }
    // },
    delete:async(req,res)=>{
        try{
            const id=req.params.id;
            await Banner.delete(id,function(banner){
                const result={
                    banner:banner,
                    status:true,
                    message:"Xoa thanh cong"
                }
                return res.status(200).json(result)
            })
        }
        catch(error){
            const result={
                banners:null,
                status:false,
                message:error.message
            }
            return res.status(200).json(result)
        }
    },
    edit:async(req,res)=>{
        try{
        const id=req.params.id
        let bodyData=req.body
         //image
         let image =req.files.image
         image.mv("./assets/images/banners/"+image.name,
            function(err,result){
    
            if(err) throw err
         })
         let d =new Date()
         const data={
            name:bodyData.name,
            position:bodyData.position,
            link:bodyData.link,
            sort_order:bodyData.sort_order,
            image:image.name,
            updated_at:`${d.getFullYear()}-${d.getMonth()}-${d.getDay()} 
            ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
            updated_by:1,
            status:bodyData.status,
         }
         await Banner.edit(data,id,function(banner){
            const result ={
                banner:banner,
                status:true,
                message:"Cap nhat du lieu thanh cong",
            }
            return res.status(200).json(result)
         })
        }catch(error){
            const result ={
                banner:null,
                status:false,
                message:error.message,
            }
            return res.status(500).json(result)
        }
        },
    show:(req,res)=>{
        const id=req.params.id
        Banner.show(id,function(data){
            if(data == null){
                return res.status(200).json({
                    banner:null,
                    status:false,
                    message:"Khong tim thay du lieu"
                })
            }else{
                return res.status(200).json({
                    banner:data,
                    status:true,
                    message:"tim thay du lieu"
                })
            }
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
            image.mv("./assets/images/banners/" + image.name, function (err) {
              if (err) throw err;
            });
        let d = new Date();
        //Lấy dũ liệu form
        const banner = {
          name: formBody.name,
          position:"slideshow",
          image:image.name,
          link: formBody.link,
          description: formBody.description,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
        Banner.store(banner, function (data) {
          const result = {
            banner: banner,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
    }
module.exports=BannerController