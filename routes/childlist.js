const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
const checkauth = require('../Auth.js');
require('dotenv/config');

router.post('/',checkauth, async (req,res)=>{
    var parent_username = req.body.parent_username;
    let sql = `SELECT * FROM Student WHERE parent_username=?`
    connection.query(sql,parent_username,function (err, result, fields) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

router.delete('/delete/:id', checkauth, async (req, res)=>{
    var id = req.params.id;
    var student_id = id
    let sql=`DELETE from Student WHERE id=?;DELETE FROM Scores WHERE student_id='${id}'`
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