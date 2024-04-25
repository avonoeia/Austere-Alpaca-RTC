const validator = require('validator')
const bcrypt = require('bcrypt')

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
    personal_email: {
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
        default: '/assets/profile-pictures/default.jpg'
    },
    about: {
        type: String,
        default: 'Hey there! I am using Prangon.'
    },
    invited_by: {
        type: String,
        default: 'None'
    },
    user_type: {
        type: String,
        default: 'Default'
    },
    department: {
        type: String,
        default: 'Unknown'
    },
    program: {
        type: String,
        default: 'Unknown'
    },
    student_id: {
        type: String,
        default: 'Unknown'
    },
    enrollment_year: {
        type: String,
        default: 'Uknown'
    },
    rs_semester: {
        type: String,
        default: 'Unknown'
    },
    courses_completed: {
        type: Array,
        default: []
    },
    courses_in_progress: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})


userSchema.statics.signup = async function (reqBody) {
    const { email, password } = reqBody
    
    if (!email || !password) {
        throw Error('All fields are required.')
    }
    
    if (!validator.isEmail(email)) {
        throw Error('Invalid email')
    }

    if (password.length < 6) {
        throw Error('Password must be 7 characters or greater')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ ...reqBody, password: hash})
    return user
}

userSchema.statics.login = async function (email, password) {
        
    if (!email || !password) {
        throw Error('All fields are required')
    }

    if (!validator.isEmail(email)) {
        throw Error('Invalid email')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Account with email does not exist')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)