// Default Configuration for Express & other Frameworks
const express = require('express')
const { connect } = require('./Database')
const app = express()
const port = 3000
app.use(express.static('public'))
app.set('view engine', 'ejs')
connect();


// VIEWS
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.get('/delete', (req, res) => {
    res.render('delete')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/modify', (req, res) => {
    res.render('modify')
})

app.get('/add', (req, res) => {
    res.render('add')
})

// RUN SERVER
app.listen(port, () => {
    console.log(`Great news! The application has started successfully on port ${port}`)
})