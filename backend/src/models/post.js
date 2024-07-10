// 게시글 스키마 정의
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
});

module.exports = mongoose.model('post', PostSchema);

