const jwt = require('jsonwebtoken');
const secret = require('../secret');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    // Middleware used to proctect routes
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

const checkUser = (req, res, next) => {
    // Middleware used to check the current user.
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            if (err) {
                next()
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.current_user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

const checkAuthenticated = (req, res, next) => {
    // Check if the user is authenticated, if the user is authenticated it will redirect to the search page, otherwise it will stay at index page. 
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, secret, async (err) => {
            if (err) {
                next();
            } else {
                res.redirect('/search');
            }
        });
    } else {
        next();
    }
}

module.exports = { requireAuth, checkUser, checkAuthenticated };