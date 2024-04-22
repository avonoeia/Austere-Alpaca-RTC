const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// const reportRoutes = require('./routes/reports')

// express app 
app = express()

// middleware
app.use(cors())
app.use(express.json())

// routes
// app.use('/api/users', userRoutes)


// Connecting to MongoDB database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to db at port:", process.env.PORT)
        })
    })
    .catch(err => console.log(err))