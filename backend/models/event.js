const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startUtc: {
        type: Date,
        required: true
    },
    venueName: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        coordinates: {
            type:  Array,
            required: true
        }
    },
    flyer:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    groupAvi: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema)