import AboutUs from "../pages/frontend/AboutUs";
import Blog from "../pages/frontend/Blog";
import Cart from "../pages/frontend/Cart";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/index";
import Services from "../pages/frontend/Services";
import Shop from "../pages/frontend/Shop";
import Checkout from "../pages/frontend/Checkout";
import ProductDetail from "../pages/frontend/product/ProductDetail";
import PageCategory from "../pages/frontend/category/PageCategory";
import PageBrand from "../pages/frontend/brand/PageBrand";
import ProductCategory from "../pages/frontend/product/ProductCategory";
import Register from "../pages/frontend/account/Register";
import Profile from "../pages/frontend/account/profile";
import Productbrand from "../pages/frontend/product/ProductBrand";
import Login from "../pages/frontend/account/Login";
import ForgotPassword from "../pages/frontend/account/ForgotPassword";
import ResetPassword from "../pages/frontend/account/ResetPassword";
import Thankyou from "../pages/frontend/thankyou";
import Orders from "../pages/frontend/account/Orders";
import SearchResults from "../pages/frontend/search/SearchResults ";
const RouterSite = [
  
  {path: "/home",element: <Home />,},

  {path: "/home/search-results",element: <SearchResults />,},

  {path: "/home/shop",element: <Shop />,},
  {path:"/home/shop/:slug",element:<ProductDetail/>},

  {path: "/home/about-us",element: <AboutUs />,},

  {path: "/home/services",element: <Services />,},

  {path: "/home/blog",element: <Blog />,},

  {path: "/home/contact",element: <Contact />,},

  {path: "/home/cart",element: <Cart />,},
  {path: "/home/thanks",element: <Thankyou/>},
  {path: "/home/checkout",element: <Checkout />,},
  {path: "/home/profile",element:<Profile/>,},
  {path: "/home/orders",element:<Orders/>},

  {path:"/home/category",element:<PageCategory/>},
  {path:"/home/category/:slug",element:<ProductCategory/>},


  {path:"/home/brand",element:<PageBrand/>},
  {path:"/home/brand/:slug",element:<Productbrand/>},

  {path: "/home/forgot_password",element:<ForgotPassword/>,},
  {path: "/home/reset_password",element:<ResetPassword/>,},


];

export default RouterSite;
