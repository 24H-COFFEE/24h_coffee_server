const express = require('express');
const router = express.Router();
const userController = require('../../controllers/client/user.controller');

router.post('/read-user', userController.readUser);
router.post('/update/user', userController.upload.fields([{ name: "img", maxCount: 1 }]), userController.updateUser);
router.post('/update/password/user', userController.resetPass);

module.exports = router;  