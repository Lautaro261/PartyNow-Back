const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "event",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      status: {
        type: DataTypes.ENUM("pending", "approved", "rejected"),
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hour: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      refund: {
        type: DataTypes.BOOLEAN,
      },
      iterativo: {
        type: DataTypes.BOOLEAN,
      },
      number_of_tickets_sold: {
        type: DataTypes.FLOAT,
      },
      number_of_tickets_scanned: {
        type: DataTypes.FLOAT,
      },
      total_number_of_reviews: {
        type: DataTypes.FLOAT,
      },
      numbers_of_series: {
        type: DataTypes.FLOAT,
      },
      average_score: {
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: true,
    }
  );
};
