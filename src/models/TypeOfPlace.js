const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "typeofplace",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: true, 
      },
    },
    {
      timestamps: true,
    }
  );
};
