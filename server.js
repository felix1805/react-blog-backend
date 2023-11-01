const express = require('express')
const mongoose = mongoose('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to DB'))
.catch(error => console.log(error.message))