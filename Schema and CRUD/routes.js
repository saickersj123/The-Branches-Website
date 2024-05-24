const express = require('express');
const path = require('path');
const PostController = require('./src/controllers/postController');
const CommentController = require('./src/controllers/commentController');
const MemberController = require('./src/controllers/memberController');
const LocationController = require('./src/controllers/locationController');
const multer = require('multer');
const router = express.Router();

// uproad image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 이미지 저장 디렉토리
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // 업로드된 파일 이름
  }
})

//Home
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Project
router.get('/project', (req,res) => {
  res.sendFile(__dirname + '/project_page.html');
})

//Members
router.get('/members', (req, res) => {
  res.sendFile(__dirname + '/members.html');
})

//NoticeBoard
router.post('/board', PostController.createPost);
router.get('/board', PostController.getAllPosts);
router.put('/board/:id', PostController.updatePost);
router.delete('/board/:id', PostController.deletePost);

// comment
router.post('/comment', CommentController.listComments);
router.get('/comment', CommentController.createComment);
router.put('/comment/:id', CommentController.updateComment);
router.delete('/comment/:id', CommentController.deleteComment);

// member
router.get('/member', MemberController.listMembers);
router.post('/member', MemberController.createMember);
router.put('/member/:id', MemberController.updateMember);
router.delete('/member/:id', MemberController.deleteMember);

// location
router.get('/location', LocationController.getAllLocations);
router.post('/location', LocationController.createLocation);
router.put('/location/:id', LocationController.updateLocation);
router.delete('/location/:id', LocationController.deleteLocation);

module.exports = router;