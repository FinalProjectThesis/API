//importing express
const express = require('express');
//executing express
const app = express();
//const mongodb = require('mongodb');
const mongoose = require('mongoose');
const registerRoute = require('./routes/register.js');

//To Covnert JSON to JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Testing this out
app.get('/', (req,res)=> {
        res.send('Hello World');
});
//Importing Routes
app.use('/register', registerRoute);

//For dotenv, to secure database 
require('dotenv/config');

//To Connect to the Database
console.log(process.env.DB_CONNECTION)
mongoose.connect(process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true },
        (err) => {
                if  (err) console.log(err)
           });

//Set listening port to port 3000
app.listen(3000);

