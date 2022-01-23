const express = require('express');
const router = express.Router();
const Post = require('../Schemas/GuardianCredentialsSchema');

router.post('/', async (req,res)=>{
    const username= req.body.username
    const Check = await Post.findOne({'username': username})
    console.clear();
    console.log(Check);
    if (Check){
        res.json(Check);
    }else{
        res.json('Failed');
    }
});
module.exports = router;