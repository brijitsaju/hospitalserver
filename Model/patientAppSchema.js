//import mongoose
const mongoose = require('mongoose')


//create Schema
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: [3, "Must be alteat 3 chaaraters but got {VALUE}"]
    },
    place: {
        type: String
    }
   ,
    age: {
        type: String
    },
    disease: {
        type: String
    },
    docname:{
        type: String
    },
    
    
   contactnumber: {
        type: Number
    }


})



const patients = mongoose.model("patients", patientSchema)

module.exports = patients