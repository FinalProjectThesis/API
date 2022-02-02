const jwt = require('jsonwebtoken');
module.exports = (req, res, next)=>{
    try{
    const token = req.headers.token
    //just to see if it's working
    console.log("AUTH.JS FILE CHECKAUTH, the token is " + token) //delete after production is done
    const decoded = jwt.verify(req.headers.token, process.env.ACCESS_TOKEN_SECRET)
    req.userData= decoded;
    next();
    }catch (error){
        return res.status(401).json({
            message: 'Error, Not Authorized Manipulate API'
        })
    }
}