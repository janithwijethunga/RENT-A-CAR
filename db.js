const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://it22305978:200025901044@cluster0.czxyxhw.mongodb.net/RENTACAR'

mongoose.connect (mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected' ,()=>{
    console.log('MongoDB Connection Successaful')
})

module.exports = mongoose