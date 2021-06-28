const express = require('express');
const GetPosts = require('../controllers/getPosts.js')
const CreatePost = require('../controllers/createPost')
const updatePost = require('../controllers/updatePost');
const deletePost = require('../controllers/deletePost');
const GetPost = require('../controllers/getPost');
const GetMyPosts = require('../controllers/getMyPosts')
const GetUser = require('../controllers/getUser')
const {Logging} = require('../middleware/auth')
const router = express.Router();


// ENDPOINTS ROUTES 
//THE MIDDLEWARE PASSES FUNCTIONALITY TO THE CONTROLLERS
router.get('/blogs', GetPosts)
router.get('/blog/:id',Logging, GetPost)
router.get('/readblog/:id', GetPost)
router.get('/myblogs',Logging, GetMyPosts)
router.post('/blog/new',Logging, CreatePost)
router.get('/getuser',Logging, GetUser)
router.put('/blog/:id',Logging, updatePost)
router.delete('/blog/:id', deletePost)


module.exports = router;