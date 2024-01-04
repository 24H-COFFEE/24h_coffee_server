const router = require('express').Router();
const tableController = require('../../controllers/server/table.controller.js');

router.get('/tables', tableController.renderPageTable);
router.post('/tables', tableController.insertTable);
router.post('/tables/remove', tableController.removeTable);

module.exports = router;