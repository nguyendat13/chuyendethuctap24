import httpAxios from "../httpAxios";
const ProductService={
    getAll:async()=>{
        return await httpAxios.get(`product/getAll`)
    },
    delete:async(id)=>{
        return await httpAxios.delete(`product/delete/${id}`)
    },
    store:async(product)=>{
        return await httpAxios.post(`product/store`,product)
    },
    list: async (page, limit) => {
        return await httpAxios.get(`product/list/${page}/${limit}`);
      },
}
export default ProductService