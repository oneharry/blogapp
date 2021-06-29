const Post = require('../model/Posts');

const updatePost = (req, res) => {
    if(!req.body.username) {  //checks if the category field is not empty on submission
        res.status(400).json({message: "Enter Your name", status: "fail"})
    } else if(!req.body.category) {  //checks if the category field is not empty on submission
        res.status(400).json({message: "Choose a category", status: "fail"})
    } else if(!req.body.title) {   //checking if the title field id not empty on submission
        res.status(400).json({message: "Enter your title", status: "fail"})
    } else if(!req.body.content) {   //checks to know if the content field is not empty
        res.status(400).json({message: "Your post can't be empty", status: "fail"})
    } else { 
        //update the post with matching id with the req.body
        Post.updateOne({_id: req.params.id}, req.body, (err) => {
            if(err) {res.status(400).json({message: "Error updating your post", status: "fail"})};
            res.status(201).json({message: "Post updated successfully", status: "success"});
        })
    }
}

module.exports = updatePost;