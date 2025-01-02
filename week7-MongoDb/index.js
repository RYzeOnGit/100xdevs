const express = require('express');
const { UserModel, TodoModel } = require('./db');

const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());
jwt_secret = "menepyaarkiya@8008s.com";

app.post("/signup", async function(req, res) {
   const email = req.body.email;
   const password = req.body.password;
   const name = req.body.name;

   await UserModel.insert({
    email: email,
    password: password,
    name: name
   })

   res.json({
    message: "User created successfully"
   })
});

app.post("/signin", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = UserModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const token = jwt.sign({
            id: user._id
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

app.post("/todo", function(req, res) {
    // Your code here
});

app.post("/todos", function(req, res) {
// Your code here
});

app.listen(3000);
