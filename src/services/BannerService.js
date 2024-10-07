import httpAxios from "../httpAxios";

const BannerService ={
    getAll:async()=>{
        return await httpAxios.get("banner/getAll")
    },
    delete:async(id)=>{
        return await httpAxios.delete(`banner/delete/${id}`)
    },
    edit:async(id,banner)=>{
        return await httpAxios.put(`banner/edit/'${id}'`,banner)
    },
    show:async(id)=>{
        return await httpAxios.get(`banner/show/${id}`)
    },
    updateStatus:async(id)=>{
        return await httpAxios.get(`banner/status`)
    },
    store: async (banner) => {
        return await httpAxios.post("banner/store",banner);
      },
}

export default BannerService