const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "follower",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
