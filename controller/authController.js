const User = require("../models/User");
const jwt = require('jsonwebtoken');
const secret = require("../secret");


const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // incorrect email
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
}

const loginAge = 7 * 24 * 60 * 60;  // 7 Days

// JWT Creation Function
const createJWT = (id) => {
    return jwt.sign({ id }, secret, {
        expiresIn: loginAge
    })
}


module.exports.register_get = (req, res) => {
    res.render("register", {title: "Register to our Website" });
}

module.exports.login_get = (req, res) => {
    res.render("login", {title: "Login to our Website" });
}

module.exports.register_post = async (req, res) => {
    const { fullName, email, password } = req.body
    const accountGroup = "Student"
    
    try {
        const user = User.create({
            fullName, email, password, accountGroup
        });
        res.status(201).json({user: (await user)._id});
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post =async  (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password);
        const token = createJWT(user._id);
        res.cookie('jwt', token, { httpOnly: true , maxAge: loginAge * 1000});
        res.status(200).json( {user: user._id})
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    }
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/')
}

