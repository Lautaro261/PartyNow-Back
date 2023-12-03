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
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING, 
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING, 
        allowNull: false,
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
        type: DataTypes.INTEGER, 
        allowNull: false,
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
