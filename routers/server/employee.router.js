const router = require('express').Router();
const employeeController = require('../../controllers/server/employee.controller.js');

router.get('/employees', employeeController.renderPageEmployee);
router.get('/employees/insert', employeeController.renderPageInsertEmployee);
router.post('/employees/insert', employeeController.insertEmployee);
router.post('/employees/remove', employeeController.removeEmployee);

module.exports = router;