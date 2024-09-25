import httpAxios from "../httpAxios";

const BrandService ={
    getAll:async()=>{
        return await httpAxios.get('brand/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`brand/delete/${id}`)
    },
    store:async(brand)=>{
        return await httpAxios.post("brand/store",brand)
    }
    
}

export default BrandService