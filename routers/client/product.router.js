const router = require('express').Router();
const controller = require('../../controllers/client/product.controller')

router.get("/products", controller.getListProductController)


module.exports = router