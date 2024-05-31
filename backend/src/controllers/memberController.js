// 멤버 조회,추가,수정,삭제
const Member = require('../models/member');

// 멤버 목록 조회
exports.listMembers = async (req, res) => {
  try {
    const members = await Member.find();
    return res.status(200).json(members);
  } catch (err) {
    return res.status(500).json({message : "멤버 조회 불가"}, err);
  }
};

// 멤버 추가
exports.createMember = async (req, res) => {
  try {
    const { name, photoUrl, description } = req.body;
    const newMember = new Member({ name, photoUrl, description });
    await newMember.save();
    return res.status(201).json(newMember);
  } catch (err) {
    return res.status(500).json({message : "멤버를 추가할 수 없습니다."}, err);
  }
};

// 멤버 수정
exports.updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, photoUrl, description } = req.body;
    const updatedMember = await Member.findByIdAndUpdate(id, { name, photoUrl, description, updatedAt: Date.now() }, { new: true });
    return res.status(200).json(updatedMember);
  } catch (err) {
    return res.status(500).json({message : "멤버를 수정할 수 없습니다."}, err);
  }
};

// 멤버 삭제
exports.deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);
    return res.status(200).json({ message: '멤버 정보가 삭제되었습니다.' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
