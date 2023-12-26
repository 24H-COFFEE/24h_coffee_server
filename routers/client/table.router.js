const router = require('express').Router();
const controller = require('../../controllers/client/table.controller')

router.get("/tables", controller.getListTableController)


module.exports = router