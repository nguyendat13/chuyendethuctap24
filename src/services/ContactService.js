import httpAxios from "../httpAxios"
const ContactService ={
    getAll:async()=>{
        return await httpAxios.get('contact/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`contact/delete/${id}`)
    },
    store:async(contact)=>{
        return await httpAxios.post(`contact/store`,contact)
    }
    
}

export default ContactService