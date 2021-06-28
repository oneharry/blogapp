const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//USER SCHEMA
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
})

//SCHEMA MODEL
const User = mongoose.model('User', userSchema);


module.exports = User;

