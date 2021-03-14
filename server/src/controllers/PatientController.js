const ResponceFormat = require('../utility/ResponceFormat');
var jwt = require('jsonwebtoken');
const patientData = require('../models/PatientModel');


const PatientController = {
    //login contrlloer checks the emailID and password
    login: (req, res) => {
        const { emailId, password } = req.body;
        if (emailId == 'john.doe@gmail.com' && password == 'John@123') {
            jwt.sign({ emailId: emailId, password: password }, process.env.JWT_SECRET, (error, token) => {
                if (error) {
                    res.status(400).send(ResponceFormat.generateResponce(400, 'Error while generating a token', false, error))
                } else {
                    let data = {
                        user: emailId,
                        token: token
                    }
                    res.status(200).send(ResponceFormat.generateResponce(200, 'Login Successfull', true, data))
                }
            });
        } else {
            res.status(401).send(ResponceFormat.generateResponce(401, 'Wrong email/password....', false, {}))
        }
    },

    getPatientHealthInfo: (req, res) => {
        res.status(200).send(ResponceFormat.generateResponce(200, 'Patient Health Info', true, patientData))
    }
}

module.exports = PatientController;