'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const booksSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        unique: false
    },
    price: {
        type: Number,
        required: true,
        unique: false
    },
    user: {
        type: ObjectId,
        ref: 'user'
    }
}, {
    timestamps: { currentTime: () => new Date().getTime() }
});

module.exports = mongoose.model('book', booksSchema, 'books');