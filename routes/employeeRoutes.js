var express = require('express');
var router = express.Router();
var employeeController=require('../controller/employeeController')
const employeevalidator=require('../module/validators/employeeValidation')



router.post('/', employeevalidator.addUserValidate, employeeController.addUser)
router.patch('/assignLaptop', employeevalidator.assignLaptopValidate, employeeController.assignLaptop)
router.patch('/deallocateLaptop',employeevalidator.deallocateLaptopValidate, employeeController.deallocateLaptop)

module.exports = router;
