const express = require('express');
const path = require('path');
const LocationController = require('../controllers/locationController');
const router = express.Router();


const publicPath = path.resolve(__dirname, '../../../frontend/public');

router.get('/place', (req, res) => {
  res.sendFile(path.join(publicPath, 'members.html#meeting-place'));
});

// location
router.get('/location', LocationController.getAllLocations);
router.post('/location', LocationController.createLocation);
router.put('/location/:id', LocationController.updateLocation);
router.delete('/location/:id', LocationController.deleteLocation);

module.exports = router;