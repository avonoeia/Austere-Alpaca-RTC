mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    bracu_email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    profile_picture: {
        type: String,
        required: true,
        default: '/assets/profile-pictures/default.jpg'
    },
    about: {
        type: String,
        required: true,
        default: ''
    },
    invited_by: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    user_type: {
        type: String,
        required: true,
        default: 'Default'
    },
    department: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    program: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    student_id: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    enrollment_year: {
        type: String,
        required: true,
        default: 'Uknown'
    },
    rs_semester: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    courses_completed: {
        type: Array,
        required: true,
        default: []
    },
    courses_in_progress: {
        type: Array,
        required: true,
        default: []
    },
    following: {
        type: Array,
        required: true,
        default: []
    },
    followers: {
        type: Array,
        required: true,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)