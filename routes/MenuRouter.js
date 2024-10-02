const MenuController =require('../controllers/MenuController')
const express=require('express')
const router=express.Router()
//backend
router.get('/getAll',MenuController.getAll)
router.delete('/delete/:id',MenuController.delete)
router.post(`/store`, MenuController.store);
//frontend
router.get("/list/:parentid/:limit", MenuController.list);

module.exports=router