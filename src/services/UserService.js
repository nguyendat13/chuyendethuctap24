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


   login: async (user) => {
  try {
    const response = await httpAxios.post(`user/login`, user, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200 && response.data.status) {
      return response.data;
    } else {
      throw new Error(response.data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login API error:", error.message);
    throw error;
  }
},





    forgotPassword:async(email) =>{
        return await httpAxios.post(`user/forgot_password`,email);
    },
    resetPassword:async(token, newPassword) =>{
        return await httpAxios.post(`user/reset_password`,token, newPassword);
    },
    checkEmail:async(email)=> {
        const response = await httpAxios.get(`user/check-email?email=${email}`);
        return response.data; // Đảm bảo trả về { exists: true/false }
    },
    
    // Ví dụ phương thức checkPhone trong UserService
    checkPhone:async (phone) =>{
        const response = await httpAxios.get(`users/check-phone?phone=${phone}`);
        return response.data; // Đảm bảo trả về { exists: true/false }
    }
    
}
export default UserService