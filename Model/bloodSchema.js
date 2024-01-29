//import mongoose
const mongoose = require('mongoose')


//create Schema
const bloodSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: [3, "Must be alteat 3 chaaraters but got {VALUE}"]
    },
    email: {
        type: String,
        require: true,
        validator(value) {
            if (validator.isEmail(value)) {
                throw new Error('invalid Email')
            }
        }

    },
    dateofbirth: {
        type: String
    },
    bloodgroup: {
        type: String
    },
    place: {
        type: String
    },
   contactnumber: {
        type: Number
    }


})



const blooddonars = mongoose.model("blooddonars", bloodSchema)

module.exports = blooddonars