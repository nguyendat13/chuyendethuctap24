import React, {useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MenuService from "../../services/MenuService"

const MainMenuItem = (props) => {
  // const menu = props.menu;
  const [menus, setMenus] = useState([]);
  
  useEffect(() => {
    (async () => {
      const result = await MenuService.list(0,10);
      setMenus(result.menus);
    })();
  }, []);
  
    return (
      <ul class="custom-navbar-nav navbar-nav ms-auto ">
      <li><a class="nav-link " href="/">Home</a></li>
      <li><a class="nav-link " href="/shop">Shop</a></li>
      <li><a class="nav-link" href="/about-us">About us</a></li>
      <li><a class="nav-link" href="/services">Services</a></li>
       <li><a class="nav-link" href="/blog">Blog</a></li>
      <li><a class="nav-link" href="/contact">Contact us</a></li> 
      </ul>
    )
   }

export default MainMenuItem
 