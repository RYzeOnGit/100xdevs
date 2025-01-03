const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require('./db');
adminRouter.post('/admin/signin', (req, res) => {
    
});

adminRouter.post('/api/courses', (req, res) => {        
});

adminRouter.get('/api/courses', (req, res) => {       
});

module.exports = {
    adminRouter: adminRouter
}