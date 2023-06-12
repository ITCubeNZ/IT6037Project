// Default Configuration for Express & other Frameworks
const express = require('express');
const { connect } = require('./Database');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json())
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

connect();

// RUN SERVER
app.listen(port, () => {
    console.log(`Great news! The application has started successfully on port ${port}`);
})

// ROUTES
app.use(authRoutes);