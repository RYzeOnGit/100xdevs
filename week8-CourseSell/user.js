const { Router} = require("exoress");
 const userRouter = Router();



userRouter.post('/user/signin', (req, res) => {
    
});
userRouter.post('/api/courses', (req, res) => {
});
userRouter.get('/api/courses', (req, res) => {
});

module.exports = {
    userRouter: userRouter
}