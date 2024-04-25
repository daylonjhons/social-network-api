const { Schema, model } = require('mongoose');

const thoughtShema = new Schema(
    {
        thoughtText: {
        },
        createdAt: {
        },
        userName: {
        },
        reactions: {
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('thought', thoughtShema);

module.exports = Thought;