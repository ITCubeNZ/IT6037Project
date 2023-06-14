const jwt = require('jsonwebtoken');
const secret = require('../secret');

const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.redirect('/login')
            } else {
                next();
            }
        })
    } else {
        res.redirect('/login');
    }
}

module.exports = { requireAuth };