const express=require('express')
const router =express.Router()
const ProductController=require('../controllers/ProductController')

router.get('/getAll',ProductController.getAll)
router.delete('/delete/:id',ProductController.delete)
router.post(`/store`, ProductController.store);
//trang nguoi dung
router.get("/list/:page/:limit", ProductController.list);
router.get("/productdetail/:slug/:limit",ProductController.productdetail)
router.get("/list_category/:categoryid/:limit",ProductController.list_category);
router.get("/list_brand/:brandid/:limit", ProductController.list_brand);
router.get("/list_product_category/:categoryid/:page/:limit",ProductController.list_product_category);

module.exports=router