//import moongose
const mongoose = require('mongoose')

//acess connection string of mondb
const connectionString = process.env.DATABASE
// connect server with mongodb
mongoose.connect(connectionString).then((res) => {
    console.log('mongodb connected sucessfuly');
}).catch((err) => {
    console.log(`mongodb connection failed due to :${err}`);
})