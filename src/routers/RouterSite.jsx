import AboutUs from '../pages/frontend/AboutUs';
import Blog from '../pages/frontend/Blog';
import Cart from '../pages/frontend/Cart';
import Contact from '../pages/frontend/Contact';
import Home from '../pages/frontend/index'
import Services from '../pages/frontend/Services';
import Shop from '../pages/frontend/Shop';
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