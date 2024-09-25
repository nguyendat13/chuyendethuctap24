const express =require('express')
const router= express.Router()
const ContactController =require('../controllers/ContactController')

router.get('/getAll',ContactController.getAll)
router.delete('/delete/:id',ContactController.delete)
router.post('/store',ContactController.store)
module.exports=router