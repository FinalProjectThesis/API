//importing express
const express = require('express');
//executing express
var cors = require('cors')
const app = express();
//const mongodb = require('mongodb');
const mongoose = require('mongoose');
//starting mysql 
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
//Routes
const registerRoute = require('./routes/register.js');
const loginRoute = require('./routes/login.js');
const childlistRoute = require('./routes/childlist.js');
const childaddRoute = require('./routes/childadd.js');
const ScoreListRoute = require('./routes/ScoreList');
const ScoreListDetailsRoute = require('./routes/scorelistdetails');
const userdetailsRoute = require('./routes/userdetails')
const childeditRoute = require ('./routes/childedit');

//To Covnert JSON to JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Testing this out
app.get('/', (req,res)=> {
        res.send('Home Page');
});
//Importing Routes
app.use(cors())
app.use('/register', registerRoute);
app.use('/login',loginRoute);
app.use('/childlist', childlistRoute);
app.use('/childadd', childaddRoute);
app.use('/scorelist', ScoreListRoute);
app.use('/scorelistdetails', ScoreListDetailsRoute);
app.use('/userdetails', userdetailsRoute);
app.use('/childedit', childeditRoute);

//For dotenv, to secure database 
require('dotenv/config');
//To connect to the MONGODB Database
console.log(process.env.DB_CONNECTION)
mongoose.connect(process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true },
        (err) => {
                if  (err) console.log(err)
           });
//Set listening port to port 3000
const port = process.env.PORT || 3000
app.listen(port);

//test


