const { Router } = require('express');
const courseRouter = Router();
const { courseModel } = require('./db');



courseRouter.post('/api/courses', (req, res) => {
});
courseRouter.get('/api/courses', (req, res) => {
});

module.exports = {
    courseRouter: courseRouter
}   