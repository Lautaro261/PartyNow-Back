const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      /* name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      }, */
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      /* dni_cuil: {
        type: DataTypes.STRING,
        allowNull: true,
      }, */
      profile_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      banner_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      /* phone: {
        type: DataTypes.STRING,
        allowNull: true,
      }, */
      /* redes: {
        type: DataTypes.STRING, // array u objeto pasado a string
        allowNull: true,
      }, */
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      follower: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
      },
      /* number_tot_events_org: {
        type: DataTypes.FLOAT,
        allowNull: true,
      }, */
      /* number_tot_events_assis: {
        type: DataTypes.FLOAT,
        allowNull: true,
      }, */
    },
    {
      timestamps: false,
    }
  );
};