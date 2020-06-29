'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    'Users',
    [
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
        },
        name: 'Brian',
        username: 'Brian@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
        },
        name: 'Kacie',
        email: 'kacie@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
