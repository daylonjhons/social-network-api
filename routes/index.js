const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use(req, res => {
    res.statusCode(404).send('404 - not found');
});

module.exports = router;