const express = require('express');
const router = express.Router();
const Post = require('../Schemas/GuardianCredentialsSchema');

router.post('/', async (req,res)=>{
    const username= req.body.username
    const password= req.body.password
    const Check = await Post.findOne({'username': username, 'password': password})
    console.clear();
    console.log(Check);
    if (Check){
        res.json('Succeeded');
    }else{
        res.json('Failed');
        }
});
module.exports = router;
