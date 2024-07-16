const express = require('express');
const path = require('path');
const multer = require('multer');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

// notice board
router.post('/board', upload.single('image'), postController.createPost);
router.get('/board', postController.getAllPosts);
router.put('/board/:id', upload.single('image'), postController.updatePost);
router.delete('/board/:id', postController.deletePost);

// comment
router.post('/comment', commentController.listComments);
router.get('/comment', commentController.createComment);
router.put('/comment/:id', commentController.updateComment);
router.delete('/comment/:id', commentController.deleteComment);

module.exports = router;
