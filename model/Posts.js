const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATING A POST SCHEMA FOR THE DB
const postSchema = new Schema({
    username: {
        type: String,
    },
    category: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    comment: {
        num_comment: {
            type: Number,
            default: 0
        },
        comments: [
            {
                type: String,
            }
        ]
    },   
}, {timestamps: true})

//SCHEMA MODEL
const Post = mongoose.model('Post', postSchema, 'Posts');

module.exports = Post;