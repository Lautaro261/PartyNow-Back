const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "establishment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      photos: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      /*    description:{                                    
        type: DataTypes.STRING,
        allowNull: true,
    }, */
      capacitance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

