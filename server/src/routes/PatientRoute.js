const express = require('express');
const route = express.Router();
const controller = require('../controllers/PatientController');
const Auth = require('../middlewares/Auth');

route.post('/login', controller.login);
route.get('/getPatientHealthInfo', Auth, controller.getPatientHealthInfo);


module.exports = route