"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define(
    "Lesson",
    {
      title: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      languages: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      totalRating: DataTypes.INTEGER,
      numberOfRatings: DataTypes.INTEGER,
    },
    {}
  );
  Lesson.associate = function (models) {
    Lesson.belongsTo(models.Tutor);
  };
  return Lesson;
};
