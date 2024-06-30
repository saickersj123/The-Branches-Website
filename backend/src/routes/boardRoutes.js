const express = require('express');
const path = require('path');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

const app = express();
const buildPath = path.join(__dirname, '/../../frontend/build');
app.use(express.static(buildPath));

app.get("/board", (req,res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
});

// notice board
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