const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
const checkauth = require('../Auth.js');
require('dotenv/config');

router.post('/',checkauth, async (req,res)=>{
    let parent_username = req.body.parent_username;
    let student_name = req.body.student_name;
    let student_age = req.body.student_age;

    let sql = `INSERT INTO Student(student_name, student_age, parent_username) VALUES ('${student_name}','${student_age}','${parent_username}');`

    connection.query(sql,function (err, result, fields) {
        if (err) {
            console.log(err);
            res.json("Error");
        } else {
             console.log(result);
            res.json("Success");
        }
    });
});
module.exports = router;