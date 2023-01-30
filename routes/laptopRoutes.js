var express=require('express')
var router=express.Router()
const laptopController=require('../controller/laptopController')
const laptopValidator=require('../module/validators/laptopValidation')

router.post('/',laptopValidator.addLaptopValidation,laptopController.addLaptop)
router.put('/', laptopController.deallocateAllLaptop)

module.exports=router