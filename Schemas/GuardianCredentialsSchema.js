const mongoose = require('mongoose');
const GuardianCredentialsSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
});
module.exports = mongoose.model('GuardianCredentials',GuardianCredentialsSchema);
