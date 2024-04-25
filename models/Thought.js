const { Schema, model } = require('mongoose');

const thoughtShema = new Schema(
    {
        published: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        text: {
            type: String,
            minLength: 1,
            maxLength: 500,
        },
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