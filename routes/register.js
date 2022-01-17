const express = require('express');
const router = express.Router();
const Post = require('../Schemas/GuardianCredentialsSchema');

router.get('/', async (req,res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});
router.post('/', async (req,res)=>{
    const post = new Post({
        username: req.body.username,
        password: req.body.password,
    })
    const username1= req.body.username
    const Check = await Post.findOne({'username': username1})
    console.log(Check);
    if (Check){
        res.json('There is already a user with the same Username!');
    }else{
        post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        });
    }
});
module.exports = router;
