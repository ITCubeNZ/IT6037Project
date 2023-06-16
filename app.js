// Default Configuration for Express & other Frameworks
const express = require('express');
const { connect } = require('./Database');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser, checkAuthenticated, checkAdministrator } = require('./middleware/authMiddleware');
const { retrieveArt, retrieveMaths, retrieveTechnology } = require('./middleware/dataMiddleware');

const app = express();

app.use(express.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

const port = 3000;
connect();

// RUN SERVER
app.listen(port, () => {
    console.log(`Great news! The application has started successfully on port ${port}`);
})

// ROUTES
app.get('*', checkUser);
app.get('/', checkAuthenticated, (req, res) => {
    res.render('index', { title: "Welcome to our Web Application"});
});

app.get('/search', requireAuth, (req, res) => {
    res.render('search', { 
        title: "Search our Digital Resources"
    });
});


app.get('/add', requireAuth, checkAdministrator, (req, res) => {
    res.render('add', { title: "Add a Digital Resource" });
});

app.get('/modify', requireAuth, (req, res) => {
    res.render('modify', { title: "Modify a Digital Resource" });
});

app.get('/categories', requireAuth, (req, res) =>{ 
    res.render('list_by_cat', { title: "Digital Resources listed by Category" });
});

app.get('/categories/art', requireAuth, retrieveArt, (req, res) => {
    res.render('cat_listed', { 
        title: "Digital Resources by Art Category",
        contentName: "Digital Resources by Art Category",
        content: res.locals.art
    });
});

app.get('/categories/maths', requireAuth, retrieveMaths, (req, res) => {
    res.render('cat_listed', {
        title: "Digital Resources by Maths Category",
        contentName: "Digital Resources by Maths Category",
        content: res.locals.maths
    });
});

app.get('/categories/technology', requireAuth, retrieveTechnology, (req, res) => {
    res.render('cat_listed', {
        title: "Digital Resources by Technology Category",
        contentName: "Digital Resources by Technology Category",
        content: res.locals.technology
    });
});


app.use(authRoutes);
app.use(dataRoutes);