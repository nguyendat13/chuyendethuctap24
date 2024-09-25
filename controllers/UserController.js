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
    }
}
module.exports=UserController