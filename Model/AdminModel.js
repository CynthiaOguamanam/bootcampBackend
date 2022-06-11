const mongoose = require('mongoose');

const postModel= mongoose.Schema({
    username:{
        type: String,
    },
    email:{
        type: String,
    },
    number:{
        type: String,
    },
    message:{
        type: String,
    },
});

module.exports = mongoose.model("posts", postModel);