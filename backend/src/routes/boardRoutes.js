const express = require('express');
const path = require('path');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

const publicPath = path.join(__dirname, '/../../../frontend/public');
router.use(express.static(publicPath));


router.get('/projects', (req, res) => {
    res.sendFile(path.join(publicPath, 'project_page.html'));
});

router.post('/board', postController.upload, postController.createPost);
router.get('/board', postController.getAllPosts);
router.put('/board/:id', postController.updatePost);
router.delete('/board/:id', postController.deletePost);

// comment
router.post('/comment', commentController.listComments);
router.get('/comment', commentController.createComment);
router.put('/comment/:id', commentController.updateComment);
router.delete('/comment/:id', commentController.deleteComment);

module.exports = router;