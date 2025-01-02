const express = require('express');
const { UserModel, TodoModel } = require('./db');

const app = express();

app.use(express.json());

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
    // Your code here
});

app.post("/todo", function(req, res) {
    // Your code here
});

app.post("/todos", function(req, res) {
// Your code here
});

app.listen(3000);
