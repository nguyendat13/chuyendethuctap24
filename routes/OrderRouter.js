const express=require('express')
const router =express.Router()
const OrderController=require('../controllers/OrderController')

router.get('/getAll',OrderController.getAll)
router.delete('/delete/:id',OrderController.delete)
router.post(`/store`, OrderController.store);
router.get("/show/:id", OrderController.show);
router.put("/edit/:id", OrderController.edit);

module.exports=router