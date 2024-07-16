const path = require('path');
const Post = require('../models/Post');

// 게시물 생성
exports.createPost = async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            image: imageUrl,
        });

        const post = await newPost.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 모든 게시물 조회
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 게시물 수정
exports.updatePost = async (req, res) => {
    try {
        const updatedData = {
            title: req.body.title,
            content: req.body.content,
        };

        if (req.file) {
            updatedData.image = `/uploads/${req.file.filename}`;
        }

        const post = await Post.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 게시물 삭제
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
