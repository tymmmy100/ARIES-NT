'use strict'

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users',
    usersController.getUsers,
    usersController.responseToJson('users')
);

router.get('/usersById/:userId',
    usersController.getUsersById,
    usersController.responseToJson('users')
);

router.get('/developerUsers',
    usersController.getDevelopers,
    usersController.responseToJson('users')
);

router.post('/users',
    usersController.getUsers,
    usersController.createUser,
    usersController.responseToJson('addUsers')
);

router.post('/deleteOne/:userId',
    usersController.deleteUserById,
    usersController.responseToJson('users')
);

module.exports = router;