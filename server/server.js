const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require('./config/db');

const avatarRoutes = require("./routes/avatarRoutes");

dotenv.config( { path: "./config/config.env"});

connectDB();

const app = express();

app.use(bodyParser.json());
app.use("/", avatarRoutes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => `Server running on port ${PORT}`);