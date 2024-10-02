const User=require('../models/User')
const UserController ={
    getAll:async(req,res)=>{
        await User.getAll(function(users){
            const result={
                users:users,
                status:true,
                message:"tai du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id= req.params.id
        await User.delete(id,function(user){
            const result={
                user:user,
                status:true,
                message:"xóa thành công"
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
        image.mv("./assets/images/users/" + image.name, function (err, data) {
          if (err) throw err;
        });
        let d = new Date();
        const user = {
          name: formBody.name,
          email: formBody.email,
          gender: formBody.gender,
          phone: formBody.phone,
          username: formBody.username,
          password: formBody.password,
          repassword:formBody.repassword,
          address: formBody.address,
          image: formBody.image,
          roles: formBody.roles,
          created_by: 1,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        };
        await User.store(user, function (data) {
          const result = {
            user: user,
            status: true,
            message: "them du lieu thanh cong",
          };
          return res.status(200).json(result);
        });
      },
}
module.exports=UserController