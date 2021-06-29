const express = require('express');
const GetPosts = require('../controllers/getPosts.js')
const CreatePost = require('../controllers/createPost')
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost');
const GetPost = require('../controllers/getPost');
const router = express.Router();


// ENDPOINTS ROUTES 
//THE MIDDLEWARE PASSES FUNCTIONALITY TO THE CONTROLLERS
router.get('/blogs', GetPosts)
router.get('/blog/:id', GetPost)
router.get('/readblog/:id', GetPost)
router.post('/blog/new', CreatePost)
router.put('/blog/:id', updatePost)
router.delete('/blog/:id', deletePost)


module.exports = router;