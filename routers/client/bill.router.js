const router = require('express').Router();
const controller = require('../../controllers/client/bill.controller')

router.post("/insert/bill", controller.insertBill)


module.exports = router