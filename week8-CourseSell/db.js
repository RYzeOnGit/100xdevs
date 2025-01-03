// Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const userSchema = new Schema({
    name: String,
    email: {type: String  , unique: true },
    password: String,
});
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    CreatorId: ObjectId
});
const adminSchema = new Schema({
    name: String,
    email: {type: String  , unique: true },
    password: String,
});
const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel = mongoose.model('User', userSchema);
const courseModel = mongoose.model('Course', courseSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const purchaseModel = mongoose.model('Purchase', purchaseSchema);