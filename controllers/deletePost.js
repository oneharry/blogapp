const Post = require('../model/Posts')

const deletePost = async (req, res) => {
    try {
        //delete post with matching id 
        const delPost = await Post.findOneAndDelete({_id: req.params.id});
        if(!delPost) res.status(404).send("Post doesn't exist");
       
        res.send("Post deleted")
    } catch (error) {
        console.error(error)
    }
}

module.exports = deletePost;