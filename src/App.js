

import { useRoutes } from "react-router-dom";
import RouterSite from './routers/RouterSite';
import LayoutSite from './layouts/LayoutSite/index';
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterAdmin from "./routers/RouterAdmin";
import NoPage from "./pages/NoPage";
function App() {
  let element =useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children:RouterSite,
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
