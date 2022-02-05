const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
const checkauth = require('../Auth.js');
require('dotenv/config');

router.post('/',checkauth, async (req,res)=>{
    var operation = req.body.operation;
    var student_id= req.body.student_id;
    let sql = `SELECT * FROM Scores WHERE student_id='${student_id}' AND operation='${operation}' ORDER BY date DESC,time DESC`
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
router.post('/:difficulty',checkauth, async (req,res)=>{
    var operation = req.body.operation;
    var student_id= req.body.student_id;
    var difficulty= req.params.difficulty;
    let sql = `SELECT * FROM Scores WHERE student_id='${student_id}' AND operation='${operation}' AND difficulty=? ORDER BY date DESC,time DESC`
    connection.query(sql,[difficulty],function (err, result, fields) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

router.post('/addscore',checkauth, async (req,res)=>{
    var student_id= req.body.student_id;
    var student_name= req.body.student_id;
    var date= req.body.date;
    var time= req.body.time;
    var operation= req.body.operation;
    var difficulty= req.body.difficulty;
    var rawscore= req.body.rawscore;
    var totalscore= req.body.totalscore;
    let sql = `INSERT INTO Scores(student_id, student_name, date, time, operation, difficulty, rawscore, totalscore)
    VALUES
    ('${student_id}', '${student_name}', '${date}', '${time}', '${operation}', '${difficulty}', '${rawscore}', '${totalscore}')`
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