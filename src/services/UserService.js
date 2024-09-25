import httpAxios from "../httpAxios";
const UserService ={
    getAll:async()=>{
        return await httpAxios.get('user/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`user/delete/${id}`)
    }
}
export default UserService