const { Thought, User } = require('../models');

async function getThoughts(req, res) {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function getSingleThought(req, res) {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });

        if (!thought) {
            return res.status(404).json({ messsage: 'no thought with that id' });
        }

        res.json(thought);
    } catch (err) {
        res.status(500).json(err)
    }
}

async function createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id }},
            { new: true }
        );
        
        if (!user) {
            return res
            .status(404)
            .json({ message: 'thought created, bot found no user what that id' });
        }
        res.json('create the thought');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

async function updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true,
                new: true } 
        );
        if (!thought) {
            return res.status(404).json({ message: 'no thought with that id' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndDelete(
            { _id: req.params.thoughtId });
        
            if (!thought) {
            return res.status(404).json({ message: 'no thought with that id' });
        }
        res.json(thought)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
}
