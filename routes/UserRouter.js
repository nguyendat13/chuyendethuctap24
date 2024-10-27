const express = require('express')
const router=express.Router()
const UserController=require('../controllers/UserController')

router.get('/getAll',UserController.getAll)
router.delete(`/delete/:id`,UserController.delete)
router.post(`/store`, UserController.store)
router.post(`/login`,UserController.login)
router.post(`/forgot_password`,UserController.forgotPassword)
router.post(`/reset_password`,UserController.resetPassword)
router.get('/check-email', UserController.checkEmail);
router.get('/check-phone', UserController.checkPhone);
module.exports=router