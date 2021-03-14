const PatientRoute = require('../routes/PatientRoute');
const express = require('express');
const app = express();
app.use(PatientRoute);

module.exports = app