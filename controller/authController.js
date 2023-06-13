const User = require("../models/User");
const jwt = require('jsonwebtoken');
const secret = require("../secret");

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: ''};
    
    // Check if email duplicate
    if (err.code === 11000) {
        errors.email = "that email is already registered";

        return errors
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    };

    return errors;
}

const loginAge = 7 * 24 * 60 * 60;
const createJWT = (id) => {
    return jwt.sign({ id }, secret, {
        expiresIn: loginAge
    })
}


module.exports.register_get = (req, res) => {
    res.render("register");
}

module.exports.login_get = (req, res) => {
    res.render("login");
}

module.exports.index_get = (req, res) => {
    res.render("index");
}

module.exports.register_post = async (req, res) => {
    const { fullName, email, password, accountGroup } = req.body
    
    try {
        const user = User.create({
            fullName, email, password, accountGroup
        });
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true , maxAge: loginAge * 1000});
        res.status(201).json({user: (await user)._id});
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = (req, res) => {
    const { email, password } = req.body

    res.send("User has logged in");
}