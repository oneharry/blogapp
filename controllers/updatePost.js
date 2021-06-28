const Post = require('../model/Posts');

const updatePost = (req, res) => {
    if(!req.body.category) {  //checks if the category field is not empty on submission
        res.status(400).send("Select a category")
    } else if(!req.body.title) {   //checking if the title field id not empty on submission
        res.status(400).send("Enter a title")
    } else if(!req.body.content) {   //checks to know if the content fiel is not empty
        res.status(400).send("Your post can't be empty")
    } else { 
        //update the post with matching id with the req.body
    Post.updateOne({_id: req.params.id}, req.body, (err) => {
        if(err) console.error(err);
        res.send("Post Updated")
        })
    }
}

module.exports = updatePost;