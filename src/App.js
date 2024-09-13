

import { useRoutes } from "react-router-dom";
import RouterSite from './routers/RouterSite';
import LayoutSite from './layouts/index';
function App() {
  let element =useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children:RouterSite,
    },
  ]);
  return element;
}

export default App;
