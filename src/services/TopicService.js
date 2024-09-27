import httpAxios from "../httpAxios";

const TopicService={
    getAll:async()=>{
        return await httpAxios.get('topic/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`topic/delete/${id}`)
    },
    store:async(topic)=>{
        return await httpAxios.post("topic/store",topic)
    }
    
}
export default TopicService