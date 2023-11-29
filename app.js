const express = require('express')
const app = express() 
const bodyparser = require('body-parser')
const session = require('express-session')
const port = 4000
const routes = require('./routes')
require('dotenv').config()
const path = require('path');

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended : true}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up session middleware
app.use(session({
    secret: 'your-secret-key', // Change this to a secret key
    resave: false,
    saveUninitialized: true
  }));

app.use('/',routes)

app.listen(process.env.PORT, () =>
{
    console.log('System up on port:',process.env.PORT)
})