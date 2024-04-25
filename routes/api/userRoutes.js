const router = require('express').Router();

const {
    getSingleUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users
router
.route('/')
.get(getUsers)
.post(createUser);

router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
.route('/:id/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;