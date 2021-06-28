const User = require('../model/Users')


const GetUser = async (req, res) => {
    try {
        //queries the DB for req.user passed from middleware
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error)
    }
}

module.exports = GetUser;