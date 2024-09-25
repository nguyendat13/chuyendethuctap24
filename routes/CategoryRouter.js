const express =require("express")
const router =express.Router();
const CategoryController =require("../controllers/CategoryController");

router.get("/getAll",CategoryController.getAll)
router.put(`/edit/:id`,CategoryController.edit)
router.get(`/show/:id`,CategoryController.show)
router.post("/store", CategoryController.store)
router.delete("/delete/:id",CategoryController.delete)


module.exports = router;