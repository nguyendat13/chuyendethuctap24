import httpAxios from "../httpAxios";
const UserService ={
    getAll:async()=>{
        return await httpAxios.get('user/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`user/delete/${id}`)  
    },
   store: async (user) => {
         return await httpAxios.post(`user/store`, user)
      },

    login:async(user)=>{
      return await httpAxios.post(`user/login`,user)
  },
 
    show: async (id) => {
        return await httpAxios.get(`user/show/${id}`);
    },
        // checkDuplicate: async (email, phone) => {
        //     return await httpAxios.get('user/check-duplicate', { email, phone });
        // },
        checkDuplicate: async (email, phone) => {
            return await httpAxios.get('user/check-duplicate', {
                params: { email, phone } // Sử dụng params để gửi tham số
            });
        },
    forgotPassword:async(email) =>{
        return await httpAxios.post(`user/forgot_password`,email);
    },
    resetPassword:async(token, newPassword) =>{
        return await httpAxios.post(`user/reset_password`,token, newPassword);
    },
  
    
}
export default UserService