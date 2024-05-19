const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(__dirname + 'home.html');
});

router.get('/index.html', (req, res) => {
  res.sendFile(__dirname, + 'index.html');
});

module.exports = router;