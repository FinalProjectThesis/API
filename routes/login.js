const express = require('express');
const router = express.Router();
const Post = require('../Schemas/GuardianCredentialsSchema');
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
require('dotenv/config');

router.post('/', async (req,res)=>{
    const username1= req.body.username
    const Check = await Post.findOne({'username': username1,})
    if (!Check){
        res.json('No such User')
    }else{
        var salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);
        const isMatch= await bcrypt.compare(req.body.password, Check.password)
        if (isMatch){
            const accessToken = jwt.sign(username1, process.env.ACCESS_TOKEN_SECRET) 
            res.json(accessToken)
            console.log(accessToken);
            console.log('logged in')
        }else{
            res.json("Failed")
        }
    }
});
module.exports = router;
