const mongoose =require('mongoose')

const docSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    department:{

        type:String,
        require:true
    },
    exper:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    },
    docImage:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

const doctors= mongoose.model("doctors",docSchema)

module.exports= doctors