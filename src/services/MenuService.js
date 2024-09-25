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
}

export default MenuService