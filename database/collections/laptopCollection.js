const mongoose=require('mongoose')
const schema=mongoose.Schema

const laptopStructure=new schema({
    laptopModel:{
        type: String,
        require: true
    },
    laptopId:{
        type: String,
        require: true
    },
    campus:{
        type: String,
        require: true
    },
    assigned:{
        type: Boolean,
        require: true,
        default: false
    }
})

const laptopCollection=mongoose.model("Laptop",laptopStructure)

module.exports=laptopCollection