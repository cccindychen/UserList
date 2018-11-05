'use strict';
// const express    = require('express');
// const app        = express();   
// const bodyParser = require('body-parser');

// // configure app to use bodyParser()
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const mongoose   = require('mongoose');
// const url = 'mongodb://admin:c123456@ds117623.mlab.com:17623/userlist';

// mongoose.connect(url, {useNewUrlParser: true}, (err) => {
//     if (err) throw err;
//     console.log("Successfully connected to the database");});

const Schema = mongoose.Schema;
const User  = mongoose.model('User', new Schema({
    firstName: String,
    lastName: String,
    sex: String,
    age: Number,
    password: String
}, {versionKey: false}), 'Users');

module.exports.User = User;