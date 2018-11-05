'use strict';
const mongoose   = require('mongoose');
const Schema = mongoose.Schema;
const User  = mongoose.model('User', new Schema({
    firstName: String,
    lastName: String,
    sex: String,
    age: Number,
    password: String
}, {versionKey: false}), 'Users');

module.exports.User = User;