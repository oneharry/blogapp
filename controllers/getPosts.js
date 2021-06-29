const Post = require('../model/Posts')

const GetPosts = async (req, res) => {
    //QUERYING THE DB FOR ALL POST sorted from recently added
    try {
        const posts = await Post.find({}).sort({createdAt: -1});
        if(!posts) res.status(204).send("No Post to display");
        res.status(200).json(posts)
    } catch (error) {
        throw error
    }
}

module.exports = GetPosts;