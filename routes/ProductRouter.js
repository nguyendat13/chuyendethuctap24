const express=require('express')
const router =express.Router()
const ProductController=require('../controllers/ProductController')

router.get('/getAll',ProductController.getAll)
router.delete('/delete/:id',ProductController.delete)
router.post(`/store`, ProductController.store);

module.exports=router