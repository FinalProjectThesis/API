const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
require('dotenv/config');

router.post('/', async (req,res)=>{
    var operation = req.body.operation;
    var student_id= req.body.student_id;
    let sql = `SELECT * FROM Scores WHERE student_id='${student_id}' AND operation='${operation}'`
    connection.query(sql,function (err, result, fields) {
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