'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    "Posts",
    [
      {
        userId: 'uuid',
        name: 'car1',
        make: 'Honda',
        modle: 'Accord',
        year: new Date(),
        updatedAt: new Date()
      },
      { 
        userId: 'uuid',
        name: 'car2',
        make: 'Nissan',
        modle: 'Altima',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],

    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete("Posts", null, {})
};
