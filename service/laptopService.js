const laptopCollection = require('../database/collections/laptopCollection')

function findLaptop(laptopId) {
    return laptopCollection.findOne({
        laptopId: laptopId
    })
}

function createLaptop(laptopModel, laptopId, campus) {
    return laptopCollection.create({
        laptopModel: laptopModel,
        laptopId: laptopId,
        campus: campus
    })
}

function updateLaptop(laptopId,bool){
    return laptopCollection.updateOne({ laptopId: laptopId }, { assigned: bool })
}

function getAllLaptopIds(){
    return laptopCollection.find()
}

module.exports = {
    findLaptop,
    createLaptop,
    updateLaptop,
    getAllLaptopIds,
}