const router = require('express').Router();
const productController = require('../../controllers/server/product.controller.js');

router.get('/products', productController.renderPageProduct);
router.get('/products/insert', productController.renderPageInsertProduct);
router.post('/products/insert', productController.insertProduct);
router.get('/products/update/:productID', productController.renderPageUpdateProduct);
router.post('/products/update/:productID', productController.updateProduct);
router.post('/products/remove', productController.removeProduct);

module.exports = router;