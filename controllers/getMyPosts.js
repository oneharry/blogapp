const User = require('../model/Users')
const Post = require('../model/Posts');


const GetMyPosts = async (req, res) => {
    try {
        //get postst that matches username for the users
        const user = await User.findById(req.user._id).select('-password');
        const posts = await Post.find({username: user.username})
        if(!posts) {
            res.status(400).json("You don't have any post yet");
        } else {
            res.json(posts);
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = GetMyPosts;