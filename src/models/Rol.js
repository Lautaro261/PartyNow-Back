const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "rol",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // 1 2 3 4 5  "asdsadsadsadasdsa" "dsadsadsadsadsa"
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM(
          "clients",
          "organizer",
          "security",
          "cashier",
          "god",
          "security/cashier"
        ),
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
      },
    },
    
    {
      timestamps: false,
    }
  );
};
