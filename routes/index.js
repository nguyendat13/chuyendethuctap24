const BannerRouter =require("./BannerRouter")
const CategoryRouter=require("./CategoryRouter")
const BrandRouter=require("./BrandRouter")
const ContactRouter=require('./ContactRouter')
const MenuRouter=require('./MenuRouter')
const OrderRouter=require('./OrderRouter')
const PostRouter=require('./PostRouter')
const ProductRouter=require('./ProductRouter')
const TopicRouter=require('./TopicRouter')
const UserRouter=require('./UserRouter')
const CartRouter=require('./CartRouter')

const router =(app)=>{
    app.use('/api/banner',BannerRouter)
    app.use('/api/category',CategoryRouter)
    app.use('/api/brand',BrandRouter)
    app.use('/api/contact',ContactRouter)
    app.use('/api/menu',MenuRouter)
    app.use('/api/order',OrderRouter)
    app.use('/api/post',PostRouter)
    app.use('/api/product',ProductRouter)
    app.use('/api/topic',TopicRouter)
    app.use('/api/user',UserRouter)
    app.use('/api/cart',CartRouter)

}
module.exports=router