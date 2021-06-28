const Post = require('../model/Posts')

const GetPosts = (req, res) => {
    //QUERYING THE DB FOR ALL POST sorted from recently added
    Post.find({}).sort({createdAt: -1})
    .then(post => {
        if(!post) res.send("No Posts yet");
            res.status(200).send(post);
    }).catch (err => console.log(err))

}

module.exports = GetPosts;