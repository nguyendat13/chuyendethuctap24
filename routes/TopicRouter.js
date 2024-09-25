const express =require('express')
const router=express.Router()
const TopicController = require('../controllers/TopicController')

router.get('/getAll',TopicController.getAll)
router.delete(`/delete/:id`,TopicController.delete)
router.post(`/store`, TopicController.store);

module.exports=router