const { Schema, model } = require('mongoose');

const reactionShema = new Schema(
    {
        reactionId: {
        },
        reactionBody: {
        },
        userName: {
        },
        createdAt: {
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('reaction', reactionShema);

module.exports = Reaction;