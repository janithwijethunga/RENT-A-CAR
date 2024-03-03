const express = require("express");
const app = express();

const dbConfig = require('./db')
const carsroute = require('./routes/carsroute')

app.use('/api/cars' , carsroute)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('node server started using nodemon'));
