const express = require('express');
const router = express.Router();
const Post = require('../Schemas/GuardianCredentialsSchema');
const bcrypt= require('bcryptjs');
router.get('/', async (req,res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});
router.post('/', async (req,res)=>{
    var salt = await bcrypt.genSalt(10);
    if (typeof req.body.password && req.body.username && req.body.first_name && req.body.last_name === 'string'){
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    const post = new Post({
        username: req.body.username,
        password: hashedpassword,
        first_name:req.body.first_name,
        last_name: req.body.last_name
    })
    const username1= req.body.username
    const Check = await Post.findOne({'username': username1})
    console.log(Check);
    if (Check){
        res.json('SameUsername'); //Someone Has the Same Username
        
    }else{
        post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        });
    }
}else{
    res.json('Insufficient Data!')
}
});
module.exports = router;
