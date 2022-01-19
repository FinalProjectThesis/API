const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
require('dotenv/config');

router.post('/', async (req,res)=>{
    let sql = "SELECT * FROM users"
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});
module.exports = router;