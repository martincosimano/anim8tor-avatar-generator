const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/db');

const avatarRoutes = require("./routes/avatarRoutes");

dotenv.config( { path: "./config/config.env"});

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", avatarRoutes);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => `Server running on port ${PORT}`);