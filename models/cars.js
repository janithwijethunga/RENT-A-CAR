const mongoose = require("mongoose")

const carSchema = mongoose.Schema ({
    name: {
        type: String ,
        required: true
    },

    maxcount: {
        type: Number ,
        required: true
    },

    phone_number: {
        type: number ,
        required: true
    },

    rentperday: {
        type: number ,
        required: true
    },

    imageurls: [],
    current_bookings : [],
    type: {
        type: String ,
        required: true
    },

    description : {
        type: String, 
        required: true
    }

},{
    timestamps: true,
})

const carModel = mongoose.model('cars', carSchema)

module.exports = carModel


