const express = require('express');
const router = express.Router();

const Car = require('../models/cars')

router.get('/getall', async(req, res) => {

    try {
        const cars = await cars.find({})
        return res.json({ cars: allCars })
    } catch (error) {
        return res.status(400).json({message: error});

    }

});

module.exports = router;
