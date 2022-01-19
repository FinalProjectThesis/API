//importing express
const express = require('express');
//executing express
const app = express();
//const mongodb = require('mongodb');
const mongoose = require('mongoose');
//starting mysql 
var mysql = require('mysql');
//Routes
const registerRoute = require('./routes/register.js');
const loginRoute = require('./routes/login.js');
const childlistRoute = require('./routes/childlist.js');
const childaddRoute = require('./routes/childadd.js');

//To Covnert JSON to JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Testing this out
app.get('/', (req,res)=> {
        res.send('Hello World');
});
//Importing Routes
app.use('/register', registerRoute);
app.use('/login',loginRoute);
app.use('/childlist', childlistRoute);
app.use('/childadd', childaddRoute);

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



