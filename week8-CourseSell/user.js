const { Router} = require("express");
const userRouter = Router();
const {userModel} = require('./db');


userRouter.post('/user/signin', (req, res) => {
    
});
userRouter.post('/api/courses', (req, res) => {
});
userRouter.get('/api/courses', (req, res) => {
});

module.exports = {
    userRouter: userRouter
}