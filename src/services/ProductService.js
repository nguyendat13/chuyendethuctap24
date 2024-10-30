import httpAxios from "../httpAxios";
const ProductService={
    getAll:async()=>{
        return await httpAxios.get(`product/getAll`)
    },
    delete:async(id)=>{
        return await httpAxios.delete(`product/delete/${id}`)
    },
    store: async (product) => {
      return await httpAxios.post(`product/store`, product);
  },
    list: async (page, limit) => {
        return await httpAxios.get(`product/list/${page}/${limit}`);
      },
    detail:async(slug,limit)=>{
        return await httpAxios.get(`product/productdetail/${slug}/${limit}`)
    },
    list_product_category: async (categoryid, page, limit) => {
        return await httpAxios.get(
          `product/list_product_category/${categoryid}/${page}/${limit}`
        );
      },
      list_brand: async (brandid, limit) => {
        return await httpAxios.get(`product/list_brand/${brandid}/${limit}`);
      },
      list_category: async (categoryid,limit) => {
        return await httpAxios.get(
          `product/list_category/${categoryid}/${limit}`
        );
      },
      show: async (id) => {
        return await httpAxios.get(`product/show/${id}`);
      },
      edit: async (id, product) => {
        return await httpAxios.put(`product/edit/${id}`, product);
      },
      searchProducts :async (query) => {
        return await httpAxios.get(`product/search?query=${encodeURIComponent(query)}`);
      },
      
}
export default ProductService