const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {z} = require("zod");

mongoose.connect("")


const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    // defining zod schema
    const Schema = z.object({
        email:  z.string().email().min(6).max(100),
        password: z.string().min(6).max(30),
        name: z.string().min(2).max(100)
    });

    const ParseDataWithSuccess = Schema.safeParse(req.body); // returns success and data

    if (!ParseDataWithSuccess.success) {
        res.status(400).json({
            message: "Invalid data"
        });
        return;
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    let error_ = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
    } catch (e) {
        console.log("Error creating user");
        res.status(403).json({
            message: "User already exists"
        })
        error_ = true;
    }
    if (!error_) {
        res.json({
            message: "You are signed up"
        })
    }
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });
    if (!response) {
        res.status(403).json({
            message: "User does not exist"
        })
    }
    const pwd_match = await bcrypt.compare(password, response.password);
    if (pwd_match) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);