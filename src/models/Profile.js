const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "profile",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, //revisar id
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dni_cuil: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      redes: {
        type: DataTypes.STRING, // array u objeto pasado a string
        allowNull: true,
      },
      number_tot_events_org: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      number_tot_events_assis: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
