const {check}=require('express-validator')

const addLaptopValidation=[
    check('laptopModel').not().isEmpty().withMessage('Laptop Model cannot be empty!').bail()
    .isAlphanumeric().withMessage('Laptop Model should consist of alphabets and numbers only'),
    check('laptopId').not().isEmpty().withMessage('Laptop Id cannot be empty!').bail()
    .isAlphanumeric().withMessage('Laptop Id should consist of alphabets and numbers only'),
    check('campus').not().isEmpty().withMessage('Campus cannot be empty!').bail()
    .isAlphanumeric().withMessage('Campus should consist of alphabets only')
]

module.exports={
    addLaptopValidation
}