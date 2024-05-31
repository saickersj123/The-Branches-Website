const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema ({
    name: String,
    address: String,
})

module.exports = mongoose.model('location', locationSchema);