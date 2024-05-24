// 댓글 스키마 정의
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  author: String, 
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  } 
});

module.exports = mongoose.model('comment', commentSchema);

