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
        required: [true, 'Please enter an email'],
        unique: [true, 'Sorry, there is already a user registered with that email.'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        minlength: [6, "Sorry your password isn't long enough"]
    }, 
    accountGroup: {
        type: String,
        required: [true, 'Please make sure to select a user group.']
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


// login the user 
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');}

const User = mongoose.model('user', userSchema);

module.exports = User;