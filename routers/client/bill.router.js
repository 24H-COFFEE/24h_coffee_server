const router = require('express').Router();
const controller = require('../../controllers/client/bill.controller')

router.post("/insert/bill", controller.insertBill)

router.post("/insert/bill/detail", controller.insertBillDetail)

router.get("/table/bill/:tableID", controller.readBillByTable)

router.get("/detail/bills/:billID", controller.readBillDetail)

router.post("/update/bill", controller.updateBill)

module.exports = router