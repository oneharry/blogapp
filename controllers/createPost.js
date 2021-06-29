const Post = require('../model/Posts.js');

const CreatePost = async (req, res) => {
    try {
        if(!req.body.username) {  //checks if the category field is not empty on submission
            res.status(400).json({message: "Enter Your name", status: "fail"})
        } else if(!req.body.category) {  //checks if the category field is not empty on submission
            res.status(400).json({message: "Choose a category", status: "fail"})
        } else if(!req.body.title) {   //checking if the title field id not empty on submission
            res.status(400).json({message: "Enter your title", status: "fail"})
        } else if(!req.body.content) {   //checks to know if the content field is not empty
            res.status(400).json({message: "Your post can't be empty", status: "fail"})
        } else {    // if no field is empty, create a new model of the post, save the new post into the DB.
                //gets the users username and asign to the post
                    const post = new Post({
                        username: req.body.username,
                        category: req.body.category,
                        title: req.body.title,
                        content: req.body.content
                    })
                //save to mongodb POSTS collection
            await post.save();
                if(err) {
                    res.status(400).json({message: "Error creating your post", status: "fail"})
                    throw err;
                } 
                res.status(201).json({message: "Post created successfully", status: "success"});
    
            
        }     
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = CreatePost;