const express=require('express')
const router =express.Router()
const PostController=require('../controllers/PostController')

router.get('/getAll',PostController.getAll)
router.delete('/delete/:id',PostController.delete)
router.post(`/store`, PostController.store);
//trang nguoi dung
router.get("/list", PostController.list);
router.get("/postdetail/:slug/:limit", PostController.postdetail);
router.get("/listnew/:limit", PostController.listnew);

module.exports=router