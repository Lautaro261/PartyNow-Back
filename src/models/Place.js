const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "place",
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
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profile_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      banner_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      photos: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      capacitance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      date: {
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
