const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../config.js');
require('dotenv/config');

router.post('/', async (req,res)=>{
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
module.exports = router;