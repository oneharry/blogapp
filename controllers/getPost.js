const Post = require('../model/Posts')

const GetPost = (req, res) => {
    //QUERIES THE DB FOR POST TITLE MATCHING THE PARAMS ID
    Post.findOne({_id: req.params.id})
    .then(data => {
        if(!data) {res.status(404).send("Post doesn't exist")}; //ENSURES THERE IS A POST MATCHING THE PARAMS ID
        res.send(data) 

    })
    .catch(err => console.error(err))
}

module.exports = GetPost;