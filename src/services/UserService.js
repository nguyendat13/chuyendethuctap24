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

    checkUserExists: async ({ email, phone }) => {
        try {
            const response = await httpAxios.post("user/check-user", { email, phone });
            return response.data;
        } catch (error) {
            console.error("Lỗi khi kiểm tra người dùng:", error);
            throw error;
        }
    },
    login:async(user)=>{
      return await httpAxios.post(`user/login`,user)
  },
    show: async (id) => {
        return await httpAxios.get(`user/show/${id}`);
    },


    forgotPassword:async(email) =>{
        return await httpAxios.post(`user/forgot_password`,email);
    },
    resetPassword:async(token, newPassword) =>{
        return await httpAxios.post(`user/reset_password`,token, newPassword);
    },
  
    
}
export default UserService