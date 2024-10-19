const express=require('express')
const router =express.Router()
const CartController=require('../controllers/CartController')

router.post("/add_to_cart/:id",CartController.addToCart)
router.get('/getcart', CartController.getCart);
router.delete('/delete/:product_id',CartController.delete)
router.put('/update/:product_id', CartController.updateCartItem);

module.exports=router