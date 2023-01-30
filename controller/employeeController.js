const employeeService = require('../service/employeeService')
const laptopService = require('../service/laptopService')
const { validationResult } = require('express-validator');

const addUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });
        }
        else {
            const { employeeName, employeeId, campus } = req.body
            const employee = await employeeService.findEmployeeById(employeeId)
            console.log("data", employee)
            if (employee == null) {
                employeeService.createEmployee(employeeName, employeeId, campus)
                    .then(res.send({ status: "Employee added Succesfully" }
                    )).catch((e) => { console.log(e) })
            }
            else {
                res.send({ status: "Employee already exists" })
            }
        }
    }
    catch (e) {
        res.send({ error: e })
    }
}

const assignLaptop = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });
        }
        else {
            const { employeeId, laptopId } = req.body
            const employee = await employeeService.findEmployeeById(employeeId)
            const laptop = await laptopService.findLaptop(laptopId)
            if (employee == null || laptop == null) {
                res.send({ Status: "Incorrect Employee Id or Laptop Id " })
            }
            else {
                if (employee.assignedLaptop !== null || laptop.assigned == true) {
                    res.send({ Status: "Employee already assigned with another laptop or the laptop is not available" })
                }
                else {
                    if (employee.campus == laptop.campus) {
                        await laptopService.updateLaptop(laptopId, true)
                        employeeService.updateEmployee(employeeId, laptopId)
                            .then(d => { res.send({ Status: "Laptop assigned successfully" }) })
                    }
                    else {
                        res.send({ Status: "Employee and laptop at different campuses" })
                    }
                }
            }
        }
    }
    catch (e) {
        res.send({ error: e })
    }
}

const deallocateLaptop = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });
        }
        else {
            const { employeeId } = req.body
            const employee = await employeeService.findEmployeeById(employeeId)
            if (employee == null) {
                res.send({ Status: "Employee doesn't exist" })
            }
            else {
                const laptopId = employee.assignedLaptop
                console.log("deAllo", laptopId)
                if (laptopId !== null) {
                    await laptopService.updateLaptop(laptopId, false)
                    employeeService.updateEmployee(employeeId, null)
                        .then(res.send({ status: "Done" }))
                }
                else {
                    res.send({ Status: "Employee is not assigned with a laptop" })
                }
            }
        }
    }
    catch (e) {
        res.send({ error: e })
    }
}

module.exports = {
    addUser,
    assignLaptop,
    deallocateLaptop,
}