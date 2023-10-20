const {Router,request,response} = require('express');
const {registerController, loginController} = require('../controller/userController');

const userRoutes = Router();

userRoutes.post('/login',(request,response)=>{loginController(request,response)});

userRoutes.post('/register',(request,response)=>{registerController(request,response)});


module.exports = userRoutes; 