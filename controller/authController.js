const User = require("../models/User");


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
        })
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).send('error, user not created');
    }
}

module.exports.login_post = (req, res) => {
    res.send("User has logged in");
}