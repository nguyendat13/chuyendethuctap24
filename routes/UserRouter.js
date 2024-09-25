const express = require('express')
const router=express.Router()
const UserController=require('../controllers/UserController')

router.get('/getAll',UserController.getAll)
router.delete(`/delete/:id`,UserController.delete)

module.exports=router