import React, {useEffect, useState } from 'react'
import MainMenuItem from './MainMenuItem';
import MenuService from "../../services/MenuService"

const MainMenu = () => {
  const [menus,setMenus]=useState("")
  useEffect(() => {
    (async () => {
      const result = await MenuService.list(0,13);
      if (result.status === true) {
        setMenus(result.menus);
      }
      })();
    }, []);
  return (
        <div><MainMenuItem/></div>
  )
}

export default MainMenu
