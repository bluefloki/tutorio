"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define(
    "Lesson",
    {
      title: DataTypes.STRING,
      pricing: DataTypes.ARRAY(DataTypes.STRING),
      languages: DataTypes.ARRAY(DataTypes.STRING),
      description: DataTypes.TEXT,
      videoUrl: DataTypes.STRING,
      totalRating: DataTypes.INTEGER,
      noOfRatings: DataTypes.INTEGER,
    },
    {}
  );
  Lesson.associate = function (models) {
    Lesson.belongsTo(models.Tutor);
  };
  return Lesson;
};
