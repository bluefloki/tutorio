"use strict";
module.exports = (sequelize, DataTypes) => {
  const LessonRequest = sequelize.define(
    "LessonRequest",
    {
      status: DataTypes.BOOLEAN,
    },
    {}
  );
  LessonRequest.associate = function (models) {
    LessonRequest.belongsTo(models.Tutor);
    LessonRequest.belongsTo(models.User);
  };
  return LessonRequest;
};
