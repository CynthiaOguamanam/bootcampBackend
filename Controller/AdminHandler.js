const postModel = require('../Model/AdminModel');

const createPost = async(req, res) =>{
    try{
		const {username, email, number, message } = req.body;
        const post = await postModel.create({
            username, 
            email,
            number,
            message
        });

        res.status(201).json({
            status:"message created",
            data: post
        })
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
}

const getPosts = async(req, res) =>{
    try{
        const post = await postModel.find();
        res.status(201).json({
            status:"All Posts",
            data: post
        })
    }catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}


module.exports = {
    createPost,
    getPosts
}