const Contact =require('../models/Contact')

const ContactController ={
    getAll:async(req,res)=>{  
            await Contact.getAll(function(contacts){
                const result={
                    contacts:contacts,
                    status:true,
                    message:"tai du lieu thanh cong"
                }
                return res.status(200).json(result)
            })
    },
    delete:async(req,res)=>{
        const id=req.params.id
        await Contact.delete(id,function(contact){
            const result ={
                contact : contact,
                status:true,
                message:"xoa thanh cong"
            }
            return res.status(200).json(result)
        })
    },
   
    store:async(req,res)=>{
        const formBody= req.body
        let image = req.files.image;
            image.mv("./assets/images/contacts/" + image.name, function (err) {
              if (err) throw err;
            });
        let d = new Date();
        const contact={
            image:image.name,
            name:formBody.name,
            email:formBody.email,
            phone:formBody.phone,
            title:formBody.title,
            content:formBody.content,
            status:formBody.status,
            created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} 
            ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        }
        Contact.store(contact,function(data){
            const result ={
                contact:contact,
                status:true,
                message:"them du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    }
}
module.exports=ContactController