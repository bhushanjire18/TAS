const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const DB = require('./src/DB/connection');
require('dotenv').config();
const allRoutes = require('./src/routes/index')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allRoutes);
app.listen(5000, (req, res) => {
    console.log('Sever is running on port 5000');
})