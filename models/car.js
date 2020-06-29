'use strict';

module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
      primaryKey: true
    },
    name: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.DATE,
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {});


  Car.associate = function(models) {
    // associations can be defined here
    Car.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'owner',
      onDelete: 'CASCADE',
    })
  };
  return Car;
};
