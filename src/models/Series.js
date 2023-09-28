const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "series",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      offCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      offAmount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
