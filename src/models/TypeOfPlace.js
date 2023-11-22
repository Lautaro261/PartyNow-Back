const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "typeOfPlace",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: true,
    }
  );
};
