import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/index";
import Services from "../pages/Services";
import Shop from "../pages/Shop"; 
const RouterSite =[
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/shop',
        element:<Shop/>
    },
    {
        path:'/about-us',
        element:<AboutUs/>
    },
    {
        path:'/services',
        element:<Services/>
    },
    {
        path:'/blog',
        element:<Blog/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/cart',
        element:<Cart/>
    }
];

export default RouterSite;