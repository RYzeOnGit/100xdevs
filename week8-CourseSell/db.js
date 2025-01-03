// Schema
const {Schema} = require('mongoose');
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
});
const courseSchema = new Schema({
    name: String,
    description: String,
    price: Number,
});
const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
});
const purchaseSchema = new Schema({
    userId: String,
    courseId: String,
    date: Date
});

const userModel = mongoose.model('User', userSchema);
const courseModel = mongoose.model('Course', courseSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const purchaseModel = mongoose.model('Purchase', purchaseSchema);