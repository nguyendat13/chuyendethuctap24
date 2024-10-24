import httpAxios from "../httpAxios";
const OrderService ={
    getAll:async()=>{
        return await httpAxios.get('order/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`order/delete/${id}`)
    },
    store:async(order)=>{
        return await httpAxios.post(`order/store`,order)
    },
    show: async (id) => {
        return await httpAxios.get(`order/show/${id}`);
      },
}
export default OrderService