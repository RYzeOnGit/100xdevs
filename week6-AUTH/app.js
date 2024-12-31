// Create a middleware called auth
const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_secret =  "randomRyanBullocksMate";

const app = express();

app.use(express.json()); // for parsing application/json middleware function

const users = [];

// Middleware to keep track of requests
function logger(req, res, next) {
    console.log(req.method + "request received");
    next();
}
// signing up
app.post('/signup', logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(user => user.username === username)) {
        res.json({
            message: "User already exists!"
        });
        return;
    }
    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in!"
    })
    console.log(users);
});

//signing in
app.post('/signin', logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;
    for(let i = 0; i < users.length; i++) {
        if(users[i].username === username && users[i].password === password) {
            foundUser = users[i];
            break;
        }
    }
    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_secret);
        res.json({
            message: "You are signed in!",
            token: token
        });
    }
    else {
        res.status(403).send({
            message: "Invalid username or password!"
        });
    }
    console.log(users);
});

// Create a middleware called auth
function auth(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_secret);
    if (decoded.username) {
        req.username = decoded.username;
        next();
    }
    else {
        res.status(403).send({
            message: "Invalid token!"
        });
    }
}

   
app.get('/me', logger, auth, function(req, res) {
    let found = null;

    for(let i = 0; i < users.length; i++) {
        if(users[i].username === req.username) {
            found = users[i];
            break;
        }
    }

    if (found){
        res.json({
            username: found.username,
            password: found.password
        });
    }
});
app.listen(3000);