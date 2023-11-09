const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "permission",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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