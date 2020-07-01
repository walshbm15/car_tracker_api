var express = require('express');
var router  = express()

var authRoutes = require('./auth');

// Import routes to base route 'api'
router.use('/auth', authRoutes);

module.exports = router;
