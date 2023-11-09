const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "location",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      addres: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      numeration: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      maps: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
