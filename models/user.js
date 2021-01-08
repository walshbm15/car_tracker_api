'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
var envConfigs =  require('../database/config/config');

var env = process.env.NODE_ENV || 'development';
var config = envConfigs[env];

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
      primaryKey: true
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    paranoid: true,
  });

  // Associations
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Car, {
      foreignKey: 'userId',
      as: 'cars',
      onDelete: 'CASCADE',
    })
  };

  // Instance methods
  User.prototype.registerUser = async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash;
    await this.save()
  }

  User.prototype.loginUser = async function (password) {
    const loggedIn = bcrypt.compare(password, this.password);
    if (loggedIn) {
      const accessToken = await jwt.sign(this.get(), config.jwtTokenSecret, { expiresIn: '1h'})
      const refreshToken = await jwt.sign(this.get(), config.jwtRefreshTokenSecret, { expiresIn: '90 days'})
      return {'accessToken': accessToken, 'refreshToken': refreshToken}
    } else {
      return false
    }
  }

  User.prototype.authenticateUserToken = async (token) => {
    return await jwt.verify(token, config.jwtTokenSecret);
  }

  User.prototype.authenticateUserRefreshToken = async (refreshToken) => {
    return await jwt.verify(refreshToken, config.jwtRefreshTokenSecret);
  }

  return User;
};
