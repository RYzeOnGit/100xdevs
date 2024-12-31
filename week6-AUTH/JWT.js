const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_secret =  "randomRyanBullocksMate";

const app = express();

app.use(express.json()); // for parsing application/json middleware function

const users = [];
// Generation of a random token for the user

// signing up
app.post('/signup', function(req, res) {
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
app.post('/signin', function(req, res) {
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

app.get('/me', function(req, res) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_secret); //JWT implementation
    const username = decoded.username;
    let found = null;

    for(let i = 0; i < users.length; i++) {
        if(users[i].username === username) {
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

    else {
        res.status(403).send({
            message: "Invalid token!"
        });
    }
});
app.listen(3000);