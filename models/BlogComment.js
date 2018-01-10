const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogCommentSchema = new Schema({
    username: String,
    content: String,
    date: Date
});

module.exports = blogCommentSchema;