var jwt = require('jsonwebtoken');
const ResponceFormat = require('../utility/ResponceFormat');

const Auth = (req, res, next) => {
    let token = null;
    if (req.headers) {
        token = req.headers.authorization;
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
        if (error) {
            res.status(400).send(ResponceFormat.generateResponce(400, 'Error while verifying the token', false, error));
        } else {
            next();
        }
    })
}

module.exports = Auth;