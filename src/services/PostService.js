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
    }
}
export default PostService