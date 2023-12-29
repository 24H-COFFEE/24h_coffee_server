const router = require('express').Router();
const bannerController = require('../../controllers/server/banner.controller.js');

router.get('/banners', bannerController.renderPageBanner);
router.post('/banners', bannerController.insertBanner);
router.post('/banners/update/:bannerID', bannerController.updateBannerStatus);
router.post('/banners/remove', bannerController.removeBanner);

module.exports = router;