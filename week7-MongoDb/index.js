const express = require('express');
const { UserModel, TodoModel } = require('./db');

const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());
jwt_secret = "menepyaarkiya@8008s.com";
 // mongoose.connect here!

app.post("/signup", async function(req, res) {
   const email = req.body.email;
   const password = req.body.password;
   const name = req.body.name;

   await UserModel.create({
    email: email,
    password: password,
    name: name
   })

   res.json({
    message: "User created successfully"
   })
});

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, jwt_secret);
        res.json({
            token: token
            });
        }
    else {
        res.status(403).json({
            message: "Invalid credentials"
        });
    }
});

function auth(req, res, next) {
    const token = req.headers.token;

    const decoded = jwt.verify(token, jwt_secret);

    if (decoded) {
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "Invalid credentials"
        });
    }
}
app.post("/todo", auth, function(req, res) {
    // Your code here
});

app.post("/todos", auth, function(req, res) {
// Your code here
});

app.listen(3000);
