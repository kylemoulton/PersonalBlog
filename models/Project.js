const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    githubUrl: String
});

module.exports = mongoose.model('project', projectSchema);