"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Lessons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      pricing: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      languages: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      description: {
        type: Sequelize.TEXT,
      },
      videoUrl: {
        type: Sequelize.STRING,
      },
      totalRating: {
        type: Sequelize.INTEGER,
      },
      noOfRatings: {
        type: Sequelize.INTEGER,
      },
      TutorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tutors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Lessons");
  },
};
