// 장소 추가, 조회, 수정, 삭제
const Location = require('../models/location');
const axios = require('axios');

// 추가
exports.createLocation = async (req, res) => {
    try {
        const { name, address } = req.body;
        const newLocation = new Location({ name, address});
        await newLocation.save();
        return res.status(201).json(newLocation);
    } catch (err) {
        return res.status(500).json({ message : "장소를 추가할 수 없습니다."}, err);
    }
}

// 조회
exports.getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        return res.status(200).json(locations);
    } catch (err) {
        return res.status(500).json({ message : "장소를 조회할 수 없습니다."}, err)
    }
}

// 수정
exports.updateLocation = async (req, res) => {
    try {
        const { name, address } = req.body;
        const updateLocation = await Location.findByIdAndUpdate(req.params.id, {name, address}, {new : true});
        return res.status(200).json(updateLocation);
    } catch(err) {
        return res.status(500).json({ message : "장소를 수정할 수 없습니다."}, err);
    }
}

// 삭제
exports.deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;
        await Location.findByIdAndDelete(id);
        return res.status(200).json("장소가 삭제되었습니다.");
    } catch (err) {
        return res.status(500).json(err)
    }
}

