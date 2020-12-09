'use strict'

const User = require('../models/users');

module.exports = {
    isUserAdmin: isUserAdmin,
    getUsers: getUsers,
    getUsersById: getUsersById,
    postUsers: postUsers,
    createUser: createUser,
    deleteUserById: deleteUserById,
    getDevelopers: getDevelopers,
    responseToJson: responseToJson
};

function isUserAdmin(req, res, next) {
    const isAdmin = true;

    if (isAdmin) {
        return next();
    }

    return res.send('You do not have ACCESS!!! Go away!!!');
}

function getUsers(req, res, next) {
    User.find(function(err, result) {
        if (err) {
            return  res.json(err);
        }

        req.resources.users = result;
        return next();
    })
}

function getDevelopers (req, res, next) {
    User.find({"details.role": 'dev'}, function(err, result) {
        if (err) {
            return  res.json(err);
        }

        req.resources.users = result;
        return next();
    })
}

function getUsersById(req, res, next) {
    User.find({_id: req.params.userId}, function(err, result) {
        if (err) {
            return  res.json(err);
        }

        req.resources.users = result;
        return next();
    })
}

function deleteUserById(req, res, next) {
    User.deleteOne({_id: req.params.userId}, function(err, result) {
        if (err) {
            return  res.json(err);
        }

        req.resources.users = result;
        return next();
    })
}

function postUsers(req, res, next) {
    console.log('post user first', req.body);
    req.resources.users = {test: 1};

    return next();
}

function createUser(req, res, next) {
    const addUser = req.body;
    addUser.details = JSON.parse(req.body.details);
    addUser.documents = JSON.parse(req.body.documents);

    const user = new User(req.body);

    user.save(function(err, result) {
        if (err) {
            console.log('error', err);
        }

        req.resources.addUsers = result;
        return next();
    })
}

function responseToJson(prop) {
    return function(req, res, next) {
        return res.status(201).json(req.resources[prop]);
    };
}

