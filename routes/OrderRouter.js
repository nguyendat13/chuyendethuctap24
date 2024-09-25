const express=require('express')
const router =express.Router()
const OrderController=require('../controllers/OrderController')

router.get('/getAll',OrderController.getAll)
router.delete('/delete/:id',OrderController.delete)
router.post(`/store`, OrderController.store);

module.exports=router