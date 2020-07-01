var express = require('express');
var router  = express()

var userController = require('../controllers/userController');

// Import routes to base route 'api'
router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser)

module.exports = router;