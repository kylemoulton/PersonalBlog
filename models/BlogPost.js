const mongoose = require('mongoose');
const { Schema } = mongoose;
const BlogComment = require('./BlogComment');

const blogPostSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    lastUpdated: { type: Date, default: null },
    comments: [BlogComment]
});

module.exports = mongoose.model('blogPost', blogPostSchema);