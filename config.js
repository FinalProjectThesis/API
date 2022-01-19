var mysql = require('mysql');
require('dotenv/config');

const connection = mysql.createConnection({
    host:process.env.RDS_HOSTNAME,
    database: process.env.RDS_DATABASE,
    user:process.env.RDS_USERNAME,
    password:process.env.RDS_PASSWORD,
    port:process.env.RDS_PORT
}) 
connection.connect(connection,function(err){
    if(err){
    console.error('Connection to the MYSQL DATABASE Failed: '+ err.stack);
    }
    if(!err){
    console.log('Connected To MYSQL DATABASE');
    } 
});
module.exports=connection;