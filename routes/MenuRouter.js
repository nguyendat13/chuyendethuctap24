const MenuController =require('../controllers/MenuController')
const express=require('express')
const router=express.Router()

router.get('/getAll',MenuController.getAll)
router.delete('/delete/:id',MenuController.delete)
router.post(`/store`, MenuController.store);

module.exports=router