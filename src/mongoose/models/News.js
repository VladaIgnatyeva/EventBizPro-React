const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const News = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const NewsModel = mongoose.model('News', News);

module.exports = NewsModel;