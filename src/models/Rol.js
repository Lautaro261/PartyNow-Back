const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "rol",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // 1 2 3 4 5  "asdsadsadsadasdsa" "dsadsadsadsadsa"
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM(
          "clients",
          "organizer",
          "security",
          "cashier",
          "superAdmin",
          "security/cashier"
        ),
        allowNull: false,
        defaultValue: "clients"
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: true,
      },
    },

    {
      timestamps: false,
    }
  );
};
