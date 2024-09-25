const express=require('express')
const router =express.Router()
const PostController=require('../controllers/PostController')

router.get('/getAll',PostController.getAll)
router.delete('/delete/:id',PostController.delete)
router.post(`/store`, PostController.store);

module.exports=router