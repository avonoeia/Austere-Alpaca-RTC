const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    post_id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    author_name: {
        type: String,
        required: true,
        trim: true
    },
    post_title: {
        type: String,
        trim: true,
    },
    post_text_content: {
        type: String,
    },
    post_image_content: {
        type: String,
    },
    topic: {
        type: String,
        required: true,
        trim: true,
        default: ''
    },
    comments: {
        type: Array,
        required: true,
        default: []
    },
}, {
    timestamps: true
})