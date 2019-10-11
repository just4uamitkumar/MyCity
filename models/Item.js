const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    stateName: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    tourPlace: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('citydetails', ItemSchema);