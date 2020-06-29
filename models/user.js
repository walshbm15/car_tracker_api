'use strict';

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
  User.prototype.registerUser = function () {
    this.save()
  }
  return User;
};
