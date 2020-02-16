const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String,
    contactno: Number
});

module.exports = mongoose.model('User', userSchema);