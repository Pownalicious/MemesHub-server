"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.belongsToMany(models.user, {
        through: "save",
        foreignKey: "postId",
      });
      post.belongsTo(models.user);
      post.belongsTo(models.genre);
      post.hasMany(models.like);
      post.hasMany(models.comment);
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
