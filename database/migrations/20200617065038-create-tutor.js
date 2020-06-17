'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tutors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      languages: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      displayPicturePath: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      bio: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.FLOAT
      },
      numberOfRatings: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tutors');
  }
};