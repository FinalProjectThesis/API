const express = require('express');
const router = express.Router();
const Post = require('../Schemas/GuardianCredentialsSchema');
const bcrypt= require('bcryptjs');

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
            res.json("Success")
        }else{
            res.json("Failed")
        }
    }
});
module.exports = router;
