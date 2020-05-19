const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.get('mongooseUri'), { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});

db.once('open', function callback() {
    console.log("Connected to DB!");
});

module.exports = mongoose;