//  Course selling app backend
const express = require('express');
const mongoose = require('mongoose');
const { userRouter } = require('./user');
const { courseRouter } = require('./course');
const { adminRouter } = require('./admin');
const app = express();

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main() {
    await mongoose.connect("");
    app.listen(3000);
    console.log("Server started at http://localhost:3000");
}

main();