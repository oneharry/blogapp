const User = require('../model/Users')
const bcrypt = require('bcryptjs')


const Register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        console.log(1)
        let user = await User.findOne({email});
        //checks if a user already used the email
        if(user) {
            console.log(2)
            return res.status(400).json({message: 'User already exists!', status: 'fail'})
        }
        //hash the password and stored as the password.
        console.log(2)
        const hashed_password = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password : hashed_password
        })
        //save user to the USERS collection
        await newUser.save();
        return res.status(201).json({message: 'New User created', status: 'success'})

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = Register;