// 댓글 조회,작성,수정,삭제

const Comment = require('../models/comment');

// 댓글 조회
exports.listComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        return res.status(200).json(comments);
    } catch(err) {
        return res.status(500).json({message : "댓글을 조회할 수 없습니다."}, err);
    }
}

// 댓글 작성
exports.createComment = async (req, res) => {
    try {
        const {content, author} = req.body;
        const newComment = new Comment({content, author});
        await newComment.save();
        return res.status(201).json(newComment);
    } catch(err) {
        return res.status(500).json({message : "댓글을 작성할 수 없습니다."}, err);
    }
}

// 댓글 수정
exports.updateComment = async (req, res) => {
    try {
      const { id } = req.params;
      const { content } = req.body;
      const updatedComment = await Comment.findByIdAndUpdate(id, { content, updatedAt: Date.now() }, { new: true });
      return res.status(200).json(updatedComment);
    } catch (err) {
      return res.status(500).json({message : "댓글을 수정할 수 없습니다."}, err);
    }
  };
  
  // 댓글 삭제
  exports.deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
      await Comment.findByIdAndDelete(id);
      return res.status(200).json({ message: '댓글이 삭제되었습니다.' });
    } catch (err) {
      return res.status(500).json({message : "댓글을 삭제할 수 없습니다."}, err);
    }
  };