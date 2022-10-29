const express = require('express');

const {
    getUserDataById,
    updateUserAddressById
} = require('../controllers');

    const router = express.Router();

    router.get('/get-user-data/:id', getUserDataById);
    router.put('/update-user-address/:id', updateUserAddressById);

    module.exports = {
        router
    }