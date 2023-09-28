const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "globalStatistics",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      events: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      organizer: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      clients: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      tickets: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};