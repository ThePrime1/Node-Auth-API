const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
// const cors = require('cors')
const connectDB = require('../backend/config/db')

connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/api/users', require('../backend/routes/userRoute'))


app.listen(process.env.PORT, (req, res) => {
    console.log(`App running on port: ${process.env.PORT}`);
})