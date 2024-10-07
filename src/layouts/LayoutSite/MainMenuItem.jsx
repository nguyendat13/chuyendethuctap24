import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuService from "../../services/MenuService";

const MainMenuItem = (props) => {
  const menu = props.menu;
  const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const result = await MenuService.list(menu.id, 10);
  //     setMenus(result.menus);
  //   })();
  // }, []);
  // if (menus && menus.length > 0) {
  //   return (
  //     <li className="nav-item dropdown ps-2">
  //       <Link
  //         className="nav-link dropdown-toggle"
  //         to={menu.link}
  //         role="button"
  //         data-bs-toggle="dropdown"
  //         aria-expanded="false"
  //       >
  //         {menu.name}
  //       </Link>

  //       <ul className="dropdown-menu">
  //         {menus.map((menusub, index) => {
  //           return (
  //             <li key={index}>
  //               <Link className="dropdown-item" to={menusub.link}>
  //                 {menusub.name}
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </li>
  //   );
  // } else {
  //   return (
  //     <>
  //       <li className="nav-item ps-2">
  //         <Link className="nav-link" to={menu.link}>
  //           {menu.name}
  //         </Link>
  //       </li>
  //     </>
  //   );
  // }
  return (
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
    <li>
      <a class="nav-link" href="/">
        Home
      </a>
    </li>
    <li>
      <a class="nav-link " href="/shop">
        Shop
      </a>
    </li>
    <li>
      <a class="nav-link" href="/about-us">
        About us
      </a>
    </li>
    <li>
      <a class="nav-link" href="/services">
        Services
      </a>
    </li>
    <li>
      <a class="nav-link" href="/blog">
        Blog
      </a>
    </li>
    <li>
      <a class="nav-link" href="/contact">
        Contact us
      </a>
    </li>
  </ul>
  )
};

export default MainMenuItem;
