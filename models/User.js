const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    access: String
});

module.exports = mongoose.model('users', userSchema);