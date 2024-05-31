// 게시글 스키마 정의
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  image: String,
});

module.exports = mongoose.model('post', PostSchema);

