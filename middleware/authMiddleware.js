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
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
        if (err) {
            console.log(err);
            res.locals.user = null;
            next();
        } else {
            let user = await User.findById(decodedToken.id);
            console.log(user)
            res.locals.user = user;
            next();
        }
    });
    } else {
        console.log(1)
        res.locals.user = null;
        next();
    }
};

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

const checkAddModifyAccess = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect('/403');
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                if (user.accountGroup === 'Administrator'|| user.accountGroup === 'Tutor') {
                    next();
                } else {
                    res.redirect('/403');
                }
            }
        });
    }
}

module.exports = { requireAuth, checkUser, checkAuthenticated, checkAddModifyAccess };