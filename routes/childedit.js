const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
require('dotenv/config');

router.put('/:id', async (req, res)=>{
    var id = req.params.id;
    var student_id = id;
    var student_name = req.body.student_name;
    var student_age = req.body.student_age;
    let sql=`UPDATE Student SET student_name='${student_name}', student_age='${student_age}' WHERE id=?; 
             UPDATE Scores SET student_name='${student_name}' WHERE student_id='${student_id}'`
    console.log(student_id);
    connection.query(sql,[id],function (err, result, fields) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(result);
            res.json(result);
        }
    }); 
});
router.delete('/:id', async (req, res)=>{
    var id = req.params.id;
    var student_id = id;
    let sql=`DELETE FROM Student  WHERE id=?; 
             DELETE FROM WHERE student_id='${student_id}'`
    console.log(student_id);
    connection.query(sql,[id],function (err, result, fields) {
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