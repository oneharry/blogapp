const Post = require('../model/Posts.js');
const User = require('../model/Users')

const CreatePost = async (req, res) => {
    try {
        if(!req.body.category) {  //checks if the category field is not empty on submission
            res.json({message: "Choose a category", status: "fail"})
        } else if(!req.body.title) {   //checking if the title field id not empty on submission
            res.json({message: "Enter your title", status: "fail"})
        } else if(!req.body.content) {   //checks to know if the content field is not empty
            res.json({message: "Your post can't be empty", status: "fail"})
        } else {    // if no field is empty, create a new model of the post, save the new post into the DB.
                //gets the users username and asign to the post
                const user = await User.findById(req.user._id).select('-password');
                    const post = new Post({
                        username: user.username,
                        category: req.body.category,
                        title: req.body.title,
                        content: req.body.content
                    })
                //save to mongodb POSTS collection
            post.save(function(err) {
                if(err) {
                    res.status(400).json({message: "Error creating your blog", status: "fail"})
                    throw err;
                } 
                res.status(201).json({message: "Post created successfully", status: "success"});
            })
            
        }     
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = CreatePost;