const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const boardRoutes = require('./routes/boardRoutes');
const memberRoutes = require('./routes/memberRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: process.env.ALLOWED_ORIGIN }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const buildPath = path.join(__dirname, '/../../frontend/build');
app.use(express.static(buildPath));


// MongoDB 연결
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

try {
    mongoose.connect(process.env.MONGO_DB_SECRET) //useNewUrlParser 옵션이 mongoose 5.3.0 이상 버전부터는 default 기능으로 내장되어 따로 옵션설정을 할 필요 없음.
    console.log('MongoDb 연결 완료')
    
} catch (error) {
    console.log(error)
}

app.use(boardRoutes);
app.use(memberRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, function(){
    console.log(`Listening on http://localhost:${PORT}`);
}); 