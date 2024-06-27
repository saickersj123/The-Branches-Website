const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();

const MemberController = require('../controllers/memberController');

const publicPath = path.resolve(__dirname,  '../../../frontend/public');
router.use(express.static(publicPath));

// uproad image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 이미지 저장 디렉토리
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // 업로드된 파일 이름
  }
})

// 멤버 페이지 라우트
router.get('/members', (req, res) => {
  res.sendFile(path.join(publicPath, 'members.html'));
});

// member
router.get('/member', MemberController.listMembers);
router.post('/member', MemberController.createMember);
router.put('/member/:id', MemberController.updateMember);
router.delete('/member/:id', MemberController.deleteMember);

module.exports = router;