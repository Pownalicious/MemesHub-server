"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class save extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      save.belongsTo(models.user);
      save.belongsTo(models.post);
    }
  }
  save.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "save",
    }
  );

  return save;
};
