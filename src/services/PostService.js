import httpAxios from "../httpAxios";
const PostService={
    getAll:async()=>{
        return await httpAxios.get('post/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`post/delete/${id}`)
    },
    store:async(post)=>{
        return await httpAxios.post(`post/store`,post)
    },
    list: () => {
        return httpAxios.get("post/list");
      },
      detail: async (slug, limit) => {
        return await httpAxios.get(`post/postdetail/${slug}/${limit}`);
      },
      listnew: async (limit) => {
        return await httpAxios.get(`post/listnew/${limit}`);
      },
}
export default PostService