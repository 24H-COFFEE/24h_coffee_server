const router = require('express').Router();
const controller = require('../../controllers/client/notification.controller')

router.post("/notifications", controller.readNotification)
router.post("/update/notification", controller.updateNotification)
router.post("/insert/notification", controller.insertNotification)

module.exports = router