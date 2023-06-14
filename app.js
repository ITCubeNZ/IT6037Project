// Default Configuration for Express & other Frameworks
const express = require('express');
const { connect } = require('./Database');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json())
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

connect();

// RUN SERVER
app.listen(port, () => {
    console.log(`Great news! The application has started successfully on port ${port}`);
})

// ROUTES
app.get('/', (req, res) => res.render('index'));
app.get('/search', requireAuth, (req, res) => res.render('search'));

app.use(authRoutes);