const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "assigned",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, //revisar id
        primaryKey: true,
      },
      /* status:{
      type: DataTypes.ENUM("") creo que ya no es necesario
    } */
    },
    {
      timestamps: true,
    }
  );
};
