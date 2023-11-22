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
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
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
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      follower: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: true, 
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
      timestamps: true,
    }
  );
};
