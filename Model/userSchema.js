//import mongoose
const mongoose =require('mongoose')

//create Schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:[3,"Must be alteat 3 chaaraters but got {VALUE}"]
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error('invalid Email')
            }
        }

    },
    password:{
        type:String,
        require:true

    },
    contactnumber:{
        type:Number
    },
    dateofbirth:{
        type:String
    },
    place:{
        type:String
    }

})


//create model
const users=mongoose.model("users",userSchema)
//expirt
module.exports=users