import httpAxios from "../httpAxios";
const MenuService ={
    getAll:async()=>{
        return await httpAxios.get('menu/getAll')
    },
    delete:async(id)=>{
        return await httpAxios.delete(`menu/delete/${id}`)
    },
    store:async(menu) => {
        return await httpAxios.post("menu/store",menu);
      },
    list: async (parentid, limit) => {
        return await httpAxios.get(`menu/list/${parentid}/${limit}`);
      },
}

export default MenuService