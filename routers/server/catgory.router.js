const router = require('express').Router();
const categoryController = require('../../controllers/server/category.controller.js');

router.get('/categories', categoryController.renderPageCategory);
router.post('/categories', categoryController.insertCategory);
router.post('/categories/update', categoryController.updateCategory);
router.post('/categories/remove', categoryController.removeCategory);

module.exports = router;