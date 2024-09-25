const express =require('express')
const router =express.Router()
const BrandController =require('../controllers/BrandController')

router.get('/getAll',BrandController.getAll)
router.delete('/delete/:id',BrandController.delete)
router.post(`/store`,BrandController.store)

module.exports=router