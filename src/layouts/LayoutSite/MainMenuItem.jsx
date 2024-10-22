import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuService from "../../services/MenuService";

const MainMenuItem = (props) => {
  const menu = props.menu;
  const [menus, setMenus] = useState([]);
  
  return (
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
    <li>
      <Link class="nav-link" to="/home">
        Home
      </Link>
    </li>
    <li>
      <Link class="nav-link " to="/home/shop">
        Shop
      </Link>
    </li>
    <li>
      <Link class="nav-link" to="/home/about-us">
        About us
      </Link>
    </li>
    <li>
      <Link class="nav-link" to="/home/services">
        Services
      </Link>
    </li>
    <li>
      <Link class="nav-link" to="/home/blog">
        Blog
      </Link>
    </li>
    <li>
      <Link class="nav-link" to="/home/contact">
        Contact us
      </Link>
    </li>
  </ul>
  )
};

export default MainMenuItem;
