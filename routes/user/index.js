var express = require('express');
var router  = express()

var registerRoutes = require('./register');

// Import routes to base route 'api'
router.use('/user', registerRoutes);

module.exports = router;
