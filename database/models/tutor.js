'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tutor = sequelize.define('Tutor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    languages: DataTypes.ARRAY(DataTypes.STRING),
    displayPicturePath: DataTypes.STRING,
    categories: DataTypes.ARRAY(DataTypes.STRING),
    bio: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
    numberOfRatings: DataTypes.INTEGER
  }, {});
  Tutor.associate = function(models) {
    // associations can be defined here
  };
  return Tutor;
};