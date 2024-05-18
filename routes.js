const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});


module.exports = router;