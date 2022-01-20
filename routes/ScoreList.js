const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
require('dotenv/config');

router.post('/', async (req,res)=>{
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
router.post('/easy', async (req,res)=>{
    var operation = req.body.operation;
    var student_id= req.body.student_id;
    let sql = `SELECT * FROM Scores WHERE student_id='${student_id}' AND operation='${operation}' AND difficulty='easy' ORDER BY date DESC,time DESC`
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
router.post('/medium', async (req,res)=>{
    var operation = req.body.operation;
    var student_id= req.body.student_id;
    let sql = `SELECT * FROM Scores WHERE student_id='${student_id}' AND operation='${operation}'AND difficulty='medium' ORDER BY date DESC,time DESC`
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
router.post('/hard', async (req,res)=>{
    var operation = req.body.operation;
    var student_id= req.body.student_id;
    let sql = `SELECT * FROM Scores WHERE student_id='${student_id}' AND operation='${operation}'AND difficulty='Hard' ORDER BY date DESC,time DESC`
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
router.post('/veryhard', async (req,res)=>{
    var operation = req.body.operation;
    var student_id= req.body.student_id;
    let sql = `SELECT * FROM Scores WHERE student_id='${student_id}' AND operation='${operation}'AND difficulty='Veryhard' ORDER BY date DESC,time DESC`
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