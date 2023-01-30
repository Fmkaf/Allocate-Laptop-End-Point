const laptopService = require('../service/laptopService')
const employeeService = require('../service/employeeService')
const { validationResult } = require('express-validator')

const addLaptop = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });
        }
        else {
            const { laptopModel, laptopId, campus } = req.body
            const laptop = await laptopService.findLaptop(laptopId)
            console.log("data", laptop)
            if (laptop == null) {
                laptopService.createLaptop(laptopModel, laptopId, campus)
                    .then(d => { res.send({ status: "laptop added Succesfully" }) })
                    .catch((e) => { console.log(e) })
            }
            else {
                res.send({ status: "laptop already exists" })
            }
        }
    }
    catch (e) {
        res.send({ error: e })
    }
}

const deallocateAllLaptop = async (req, res) => {
    try {
        const laptop = await laptopService.getAllLaptopIds()
        const employee = await employeeService.findAllEmployees()
        console.log("emp", employee)
         laptop.forEach(async (o) => { await laptopService.updateLaptop(o.laptopId, false) })
         employee.forEach(async (o) => { await employeeService.updateEmployee(o.employeeId, null) })
        res.send({ status: "Success" })
    }
    catch (e) {
        console.log(e)
        res.send({ error: e.message })
    }
}

module.exports = {
    addLaptop,
    deallocateAllLaptop,
}