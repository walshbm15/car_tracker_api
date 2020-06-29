var express = require('express');
var router  = express()

var userRoutes = require('./user');

// Import routes to base route 'api'
router.use('/api', userRoutes);

module.exports = router;
