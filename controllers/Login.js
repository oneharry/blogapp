const User = require('../model/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const Login = async (req, res) => {
    const {email, password} = req.body;


    try {
        const user = await User.findOne({email});
        //checks if email already exists in the DB
        if(!user) {
            return res.status(400).json({message: 'Incorrect email or password', status: 'fail'})
        }
        //checks if password matches the email
        //first, unhashing the password to compare
        isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword) {
            return res.status(400).json({message: 'Incorrect email or ppassword', status: 'fail'})
        }
        //signs a token to the user using the jwt
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn :'2h'})
        return res.json({token})
    } catch(error) {

    }
}

module.exports = Login;
