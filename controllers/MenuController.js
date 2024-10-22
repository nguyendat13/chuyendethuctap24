const Menu=require('../models/Menu')

const MenuController ={
    getAll:async(req,res)=>{
        await Menu.getAll(function(menus){
            const result={
                menus:menus,
                status:true,
                message:"tai du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id=req.params.id
        await Menu.delete(id,function(menu){
            const result ={
                menus:menu,
                status:true,
                message:"xoa du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
            image.mv("./assets/images/menus/" + image.name, function (err) {
              if (err) throw err;
            });
        let d = new Date();
        //Lấy dũ liệu form
        const menu = {
          name: formBody.name,
          image:image.name, 
          link: formBody.link,
          position:formBody.position,
          sort_order:formBody.sort_order,
          parent_id:formBody.parent_id,
          type:formBody.type,
          table_id:formBody.table_id,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
        await Menu.store(menu, function (data) {
          const result = {
            menu: menu,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
      
      list: async (req, res) => {
        try {
          const parentId = req.params.parentid || 0; // Default to 0 if no parent ID is provided.
          const limit = parseInt(req.params.limit) || 10; // Default limit to 10 if not provided.
      
          // Use the getList method to fetch the menus.
          Menu.getList(parentId, limit, (menu) => {
            if (!menu) {
              return res.status(500).json({
                status: false,
                message: "Failed to fetch menu data.",
              });
            }
      
            // Send a successful response with the menu data.
            const result = {
              menu,
              status: true,
              message: "Data fetched successfully",
            };
            return res.status(200).json(result);
          });
        } catch (error) {
          console.error("Error fetching menus:", error);
          return res.status(500).json({
            status: false,
            message: "An unexpected error occurred.",
          });
        }
      },
      
}
module.exports=MenuController