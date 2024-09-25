const express =require("express")
const router =express.Router();
const BannerController =require("../controllers/BannerController");

router.get("/getAll",BannerController.getAll);
router.delete("/delete/:id",BannerController.delete)
router.put(`/edit/:id`,BannerController.edit)
router.get(`/show/:id`,BannerController.show)
router.post(`/store`, BannerController.store);

// router.updateStatus(`/status`,BannerController.updateStatus)
module.exports = router