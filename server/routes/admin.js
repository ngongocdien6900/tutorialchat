const express = require('express');
const route = express.Router();
const admin = require('../controllers/admin');

//admin
route.post('/login', admin.postLogin);
route.post('/register', admin.postRegister);

module.exports = route;