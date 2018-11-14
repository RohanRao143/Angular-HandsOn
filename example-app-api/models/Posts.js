const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    post : String
}, {timestamps: true});

const Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;