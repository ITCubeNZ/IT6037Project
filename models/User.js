const mongoose = require('mongoose');
const  { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your full name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email.'], 
        unique: [true, 'Sorry, there is already a user registered with that email.'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password.'],
        minlength: [6, "Sorry your password isn't long enough"]
    }, 
    userGroup: {
        type: String
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;