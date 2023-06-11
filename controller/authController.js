module.exports.register_get = (req, res) => {
    res.render("register");
}

module.exports.login_get = (req, res) => {
    res.render("login");
}

module.exports.index_get = (req, res) => {
    res.render("index");
}

module.exports.register_post = (req, res) => {
    res.send("User Registered");
}

module.exports.login_post = (req, res) => {
    res.send("User has logged in");
}