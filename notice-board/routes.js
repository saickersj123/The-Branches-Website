const express = require('express');
const path = require('path');
const PostController = require('./postcontroller');
const router = express.Router();

//Home
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//Project
router.get('/project', (req,res) => {
  res.sendFile(__dirname + '/public/project_page.html');
})

//Members
router.get('/members', (req, res) => {
  res.sendFile(__dirname + '/public/members.html');
})

//NoticeBoard
router.post('/board', PostController.createPost);
router.get('/board', PostController.getAllPosts);
router.put('/board/:id', PostController.updatePost);
router.delete('/board/:id', PostController.deletePost);


module.exports = router;