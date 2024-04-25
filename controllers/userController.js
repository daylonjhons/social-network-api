const { User, Thought } = require('../models');

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function getSingleUser(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId }).populate('thoughts');
        if (!user) {
            return res.status(404).json({ message: 'no user with that id' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function createUser(req, res) {
    try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function updateUser(req, res) {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (!userData) {
            return res.status(404).json({ message: 'no user with that id' });
        }
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function deleteUser(req, res) {
    try {
        const userData = await User.findOneAndDelete({ _id: req.params.userId });
        if (!userData) {
            return res.status(404).json({ message: 'no user with that id' });
        }
        await Thought.deleteMany({ _id: { $in: userData.thoughts } });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function addFriend(req, res) {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        if (!userData) {
            return res.status(404).json({ message: 'no user with that id' });
        }
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function removeFriend(req, res) {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!userData) {
            return res.status(404).json({ message: 'no user with that id' });
        }
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
};
