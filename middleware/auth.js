const jwt = require('jsonwebtoken');

exports.Logging =(req, res, next) => {
    try {
        if(req.headers.authorization) {
            //GET TOKEN FROM THE REQUEST HEADER
            const token = req.headers.authorization.split(' ')[1];
            //VERIFICATION OF THE TOKEN
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            //ATTACH THE TOKEN TO THE REQUEST
            //MAKES THE REQ.USER VALUE AVAILABLE TO CONTROLLERS
             req.user = decode;
             next();
        } else {
            return res.status(400).json({message: 'Login Required!!', status: 'fail'});
        }
    } catch(error) {
        console.log(error);
    }
}