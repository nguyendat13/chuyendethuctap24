import httpAxios from "../httpAxios";

const CategoryService ={
    getAll:async()=>{
        return await httpAxios.get("category/getAll")
    },
    edit:async(data,id)=>{
        return await httpAxios.put(`category/edit/'${id}'`,data)
    },
    store: async (category) => {
        return await httpAxios.post("category/store",category);
      },
    show:async(id)=>{
        return await httpAxios.get(`category/show/${id}`)
    },
    delete:async(id)=>{
        return await httpAxios.delete(`category/delete/${id}`)
    },
}

export default CategoryService