'use strict'

const mongoose = require('mongoose');
const config = require('./index');

module.exports = {
    initMongoose: initMongoose
};

function initMongoose() {
    mongoose.connect(config.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });


    // CHECK IF CONNECTED
    // const db = mongoose.connection;
    //
    // db.on('error', function() {
    //     console.log('error');
    // });
    //
    // db.once('open', function() {
    //     console.log('connected');
    // });
}