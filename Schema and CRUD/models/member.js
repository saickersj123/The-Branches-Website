// 멤버 스키마 정의
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    photoUrl: String,
    description: String,
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date, 
        default: Date.now
    }
})

module.exports = mongoose.model('member', memberSchema);