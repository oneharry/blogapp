const express = require('express');
const Login = require('../controllers/Login');
const Register = require('../controllers/Register');
const routerUser = express.Router();


//USERS ROUTES 
routerUser.post('/login', Login)
routerUser.post('/register', Register)



module.exports = routerUser;
