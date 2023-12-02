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
      title:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING, //cambiar a numero
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
        type: DataTypes.STRING, //cambiar a numero
        allowNull: true,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
