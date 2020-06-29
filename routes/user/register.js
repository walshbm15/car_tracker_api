const wrap = require("../../middleware/wrap");
var models  = require('../../models');
var express = require('express');
var router  = express.Router()

router.post('/register', wrap(async function(req, res) {
  var username = req.body.username,
      password = req.body.password;
      u = models.User.build({
        username: username, password: password
      })
      
      await u.registerUser()
      res.send('hello world')
  }))

module.exports = router;
