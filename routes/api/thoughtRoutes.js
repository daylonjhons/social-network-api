const router = require('express').Router();

const {
    getSingleThought,
    getThoughts,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

router.route('/')
    .get(getThoughts)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId')
    .get(getSingleThought);

module.exports = router;