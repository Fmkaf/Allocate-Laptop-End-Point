const employeeCollection = require('../database/collections/employeeCollection')

function createEmployee(employeeName, employeeId, campus){
    return employeeCollection.create({
        employeeName: employeeName,
        employeeId: employeeId,
        campus: campus
    })
}

function findEmployeeById(employeeId){
    return employeeCollection.findOne({
        employeeId: employeeId
    })
}

function updateEmployee(employeeId,laptopId){
    return employeeCollection.updateOne({ employeeId: employeeId }, { assignedLaptop: laptopId })
}

function findAllEmployees(){
    return employeeCollection.find()
}

module.exports={
    createEmployee,
    updateEmployee,
    findEmployeeById,
    findAllEmployees,
}