const asyncHandler = require('express-async-handler')
const models  = require('../models');

var user = models.User

exports.registerUser = asyncHandler(async function(req, res) {
  var username = req.body.username,
      password = req.body.password;
      var u = user.build({
        username: username, password: password
      })
      
      await u.registerUser()
      res.send('hello world')
  }
);

exports.loginUser = asyncHandler(async function(req, res) {
  username = req.body.username
  password = req.body.password
  const u = await user.findOne({ where: { username: username } });
  const tokens = await u.authenticateUser(password)

  if (tokens) {
    const response = {
      "status": "Logged in",
      "access_token": tokens.accessToken,
      "refresh_token": tokens.refreshToken,
    }
    res.status(200).json(response);
  } else {
    res.send('Not logged in')
  }
});

exports.refreshToken = function(req, res) {
  res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};
