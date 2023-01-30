const { check } = require('express-validator')

const addUserValidate = [
    check('employeeName').not().isEmpty().withMessage('Employee Name can not be empty!').bail()
        .isAlphanumeric().withMessage('Employee Name should consist of alphabets and numbers only'),
    check('employeeId').not().isEmpty().withMessage('Employee Id can not be empty!').bail()
        .isAlphanumeric().withMessage('Employee Id should consist of alphabets and numbers only'),
    check('campus').not().isEmpty().withMessage('Campus can not be empty!').bail()
        .isAlpha().withMessage('Campus should consist of alphabets only')
]

const assignLaptopValidate = [
    check('employeeId').not().isEmpty().withMessage('Employee Id can not be empty!').bail()
        .isAlphanumeric().withMessage('Employee Id should consist of alphabets and numbers only'),
    check('laptopId').not().isEmpty().withMessage('Laptop Id can not be empty!').bail()
        .isAlphanumeric().withMessage('Laptop Id should consist of alphabets and numbers only'),
]

const deallocateLaptopValidate=[
    check('employeeId').not().isEmpty().withMessage('Employee Id can not be empty!').bail()
    .isAlphanumeric().withMessage('Employee Id should consist of alphabets and numbers only'),
]

module.exports = {
    addUserValidate,
    assignLaptopValidate,
    deallocateLaptopValidate
}