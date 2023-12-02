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
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
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
      longitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
    {
      timestamps: true,
    }
  );
};
