

import { useRoutes} from "react-router-dom";
import React, { useState } from 'react';
import RouterLogin from './routers/RouterLogin';
import RouterSite from './routers/RouterSite';
import LayoutSite from './layouts/LayoutSite/index';
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterAdmin from "./routers/RouterAdmin";
import NoPage from "./pages/NoPage";
import Login from "./pages/frontend/account/Login";
import Register from "./pages/frontend/account/Register";
import RouterRegister from "./routers/RouterRegister";
function App() {
  let element =useRoutes([
    
    {
      path:"/",
      element:<Login/>,
      children:RouterLogin,
    },
    {
      path: "/home",
      element: <LayoutSite />,
      children:RouterSite,
    },
   
    {
      path:"register",
      element:<Register/>,
      children:RouterRegister,
    },
    {
      path: "admin",
      element: <LayoutAdmin />,
      children:RouterAdmin,
    },
    {
      path:"*",
      element: <NoPage />
    }
  ]);
  return element;
}

export default App;
