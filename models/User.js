const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
        },
        email: {
        },
        thoughts: {
        },
        friends: {
        }
    },
    {
        toJSON: {
            virtuals: true,
        },

    }
);

    const User = model('user', userSchema);

    module.exports = User;