import {BannerCreate, BannerEdit,BannerList} from "../pages/backend/banner"
import { CategoryCreate, CategoryEdit, CategoryList } from "../pages/backend/category"
import { BrandCreate, BrandList } from "../pages/backend/brand"
import { ContactCreate, ContactList } from "../pages/backend/contact"
import { MenuCreate, MenuList } from "../pages/backend/menu"
import { OrderCreate, OrderList } from "../pages/backend/order"
import { PostCreate, PostList } from "../pages/backend/post"
import { ProductCreate, ProductList } from "../pages/backend/product"
import { TopicCreate, TopicList } from "../pages/backend/topic"
import { UserCreate, UserList } from "../pages/backend/user"
import Register from "../pages/frontend/account/Register"
import ProductEdit from "../pages/backend/product/ProductEdit"

const RouterAdmin =[
   
    {path:"banner",element:<BannerList/>},
    {path:"banner/edit/:id",element:<BannerEdit/>},
    {path:"banner/create",element:<BannerCreate/>},


    {path:"category",element:<CategoryList/>},
    {path:"category/edit/:id",element:<CategoryEdit/>},
    {path:"category/create",element:<CategoryCreate/>},

    {path:"brand",element:<BrandList/>},
    {path:"brand/create",element:<BrandCreate/>},
    
    {path:"contact",element:<ContactList/>},
    {path:"contact/create",element:<ContactCreate/>},

    {path:"menu",element:<MenuList/>},
    {path:"menu/create",element:<MenuCreate/>},

    {path:"order",element:<OrderList/>},
    {path:"order/create",element:<OrderCreate/>},

    {path:"post",element:<PostList/>},
    {path:"post/create",element:<PostCreate/>},

    {path:"product",element:<ProductList/>},
    {path:"product/create",element:<ProductCreate/>},
    { path: "/admin/product/edit/:id",element:<ProductEdit/>},



    {path:"topic",element:<TopicList/>},
    {path:"topic/create",element:<TopicCreate/>},


    {path:"user",element:<UserList/>},
    { path: "user/create", element: <UserCreate/> },
]

export default RouterAdmin