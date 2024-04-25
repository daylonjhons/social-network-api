const router = require('express').Router();

const {
    getSingleUser,
    getUsers,
    createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:UserId')
    .get(getSingleUser);

module.exports = router;