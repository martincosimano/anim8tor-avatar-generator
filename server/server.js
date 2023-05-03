const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config( { path: './config/config.env'})

connectDB()

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);