'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tutor = sequelize.define('Tutor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    displayPicturePath: DataTypes.STRING
  }, {});
  Tutor.associate = function(models) {
    // associations can be defined here
  };
  return Tutor;
};