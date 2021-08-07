const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require ('./api/userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/users', userRoutes);

module.exports = router;
