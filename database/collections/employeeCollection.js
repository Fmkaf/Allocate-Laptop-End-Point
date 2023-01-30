const mongoose=require('mongoose')
const schema=mongoose.Schema

const employeeStructure = new schema({
	employeeName: {
		type: String,
		require: true
	},
	employeeId: {
		type: String,
		require: true
	},
    campus: {
        type: String,
        require: true
    },
	assignedLaptop:{
		type: String,
		require: true,
		default: null
	}
})

const employeeCollection = mongoose.model(
		"Employee", employeeStructure)

module.exports=employeeCollection