// Default Configuration for Express & other Frameworks
const express = require('express');
const { connect } = require('./Database');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

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
app.get('/', (req, res) => {
    res.render('index', { title: "Welcome to our web application" });
});

app.get('/search', requireAuth, (req, res) => {
    res.render('search', { title: "Search our Digital Resources" });
});


app.get('/add', requireAuth, (req, res) => {
    res.render('add', { title: "Add a Digital Resource" });
});

app.get('/modify', requireAuth, (req, res) => {
    res.render('modify', { title: "Modify a Digital Resource" });
});

app.get('/categories', requireAuth, (req, res) =>{ 
    res.render('list_by_cat', { title: "Digital Resources listed by Category" });
});

app.use(authRoutes);
app.use(dataRoutes);