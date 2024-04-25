const User = require('../models/user');

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    }   catch (err) {
        res.status(500).json(err);
    }
}
async function getSingleUser(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId })
        .populate('thoughts');
        
        if (!user) {
            return res.status(404).json({ messsage: 'no user with that id' });
        }

        res.json(user);
    }   catch (err) {
        res.status(500).json(err)
    }
}

async function createUser(req, res) {
    try {
        const dbUserData = await User.create(req.body);
        req.json(dbUserData);
    }   catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getUsers,
    getSingleUser,
    createUser
};
