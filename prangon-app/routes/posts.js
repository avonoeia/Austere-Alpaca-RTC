const express = require('express')
const router = express.Router()
const {
    getPosts,
    createPost
} = require('../controllers/postsController')

router.get('/get-posts', getPosts)
router.post('/create', createPost)

module.exports = router